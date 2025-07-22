import { createContext, useContext, useState, useEffect } from "react";

/**
 * El componente CarritoContext se encarga de crear un contexto global
 * que podrá usarse dentro de otros componentes para manejar el estado
 * del carrito.
 */

const CarritoContext = createContext();

export const useCarrito = ()=> useContext(CarritoContext);

export const CarritoProvider = ({children})=>{
    const [carrito, setCarrito] = useState(()=>{
        const almacenado = localStorage.getItem('carrito');
        return almacenado ? JSON.parse(almacenado) : [];
    });

    useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    const añadirProducto = (producto)=>{
        setCarrito(prev=>[...prev, producto]);
    };


    return(
        <CarritoContext.Provider value={{ carrito, añadirProducto }}>
            {children}
        </CarritoContext.Provider>
    );
};