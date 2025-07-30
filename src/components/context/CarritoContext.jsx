import { createContext, useContext, useState, useEffect } from "react";

/**
 * El componente CarritoContext se encarga de crear un contexto global
 * que podrá usarse dentro de otros componentes para manejar el estado
 * del carrito.
 */


// Esta sentencia crea el contexto. Crea un objeto que almacenará el estado global y podrá compartirse entre componentes
const CarritoContext = createContext();


/**
 * Esto es un custom hook (función personalizada) para facilitar el acceso al contexto.
 * En lugar de escribir useContext(CarritoContext) en cada componente, puedes escribir simplemente useCarrito().
 */

export const useCarrito = ()=> useContext(CarritoContext);


/**
 * Crea el componente proveedor (Provider) del contexto. 
 * Va a envolver tu app entera y permitirá que todos los componentes accedan al estado del carrito.
 * children es todo lo que este dentro de <CarritoProvider> en el main.jsx
 */
export const CarritoProvider = ({children})=>{

    /**
     * Inicializa el estado del carrito.
     * Si hay datos guardados en el localStorage los carga.
     * Si no, empieza con un array vacío.
     * Le paso una función como argumento para que sólo se ejecute una vez en el montaje inicial
     */
    const [carrito, setCarrito] = useState(()=>{
        const almacenado = localStorage.getItem('carrito');
        return almacenado ? JSON.parse(almacenado) : [];
    });


    const [precioTotal, setPrecioTotal] = useState(0);


    /**
     * Con useEffect lo que se hace es que cada vez que cambie el estado
     * carrito se actualiza el localStorage, de manera que si se recarga la
     * página el contenido sigue ahí.
     */
    useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);


    /**
     * En la función añadirProducto se le pasa el producto como argumento
     * se utiliza prev para mantener los productos anteriores y se añade el
     * nuevo con spread operator 
     */
    const añadirProducto = (producto)=>{
        setCarrito(prev=>{
            // Comprueba si el producto ya está en el carrito
            const existe = prev.find(p => p.id === producto.id);
            if(existe){
                // Si ya existe, aumenta la cantidad
                return prev.map(p => 
                    p.id === producto.id ? {...p, cantidad: p.cantidad + 1} : p
                );
            }
            // Si no existe, añade el nuevo producto con cantidad 1
            return [...prev, {...producto, cantidad: 1}];
        });
    };

    /**
     * Con eliminarProducto se busca dentro del array de carrito un producto cuyo id no coincida con 
     * el id pasado por parametro, descartando el que sí coincida
     */

    const eliminarProducto = (idProducto)=>{
        setCarrito(prev=>prev.filter(producto=>producto.id !== idProducto));
    };

    /**
     * Para aunmentar la cantidad se sigue el mismo procedimiento que en la función anterior
     * a la hora de buscar en carrito por el id de los productos
     */
    const aumentarCantidad = (id)=>{
        setCarrito(prev=>
            prev.map(p =>
                p.id === id ? {...p, cantidad: p.cantidad + 1} : p
            )
        )
    };

    /**
     * Igual que en el caso anterior con la diferencia de que se añade una condición que impida que cantidad baje de 1
     */
    const disminuirCantidad = (id)=>{
        setCarrito(prev=>
            prev.map(p =>
                p.id === id && p.cantidad > 1 ? {...p, cantidad: Math.max(p.cantidad - 1, 1)} : p
            )
        )
    };

    

    useEffect(()=>{
        if(carrito.length > 0){
            const total = carrito.reduce((acumulador, producto)=> acumulador + (producto.precio * producto.cantidad), 0);
            setPrecioTotal(total);
        }else{
            setPrecioTotal(0);
        }
    }, [carrito]);

   
    return(
        <CarritoContext.Provider value={{ carrito, añadirProducto, eliminarProducto, aumentarCantidad, disminuirCantidad, precioTotal }}>
            {children}
        </CarritoContext.Provider>
    );
};