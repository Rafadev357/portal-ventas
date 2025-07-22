import { createContext, useContext, useState, useEffect } from "react";

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