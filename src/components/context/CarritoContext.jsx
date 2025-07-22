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
        setCarrito(prev=>[...prev, producto]);
    };

    const eliminarProducto = (idProducto)=>{
        setCarrito(prev=>prev.filter(producto=>producto.id !== idProducto));
    };

    const aumentarCantidad = (id)=>{
        setCarrito(prev=>
            prev.map(p =>
                p.id === id ? {...p, cantidad: p.cantidad + 1} : p
            )
        )
    };

    const disminuirCantidad = (id)=>{
        setCarrito(prev=>
            prev.map(p =>
                p.id === id && p.cantidad > 1 ? {...p, cantidad: Math.max(p.cantidad - 1, 1)} : p
            )
        )
    };


    return(
        <CarritoContext.Provider value={{ carrito, añadirProducto, eliminarProducto, aumentarCantidad, disminuirCantidad }}>
            {children}
        </CarritoContext.Provider>
    );
};