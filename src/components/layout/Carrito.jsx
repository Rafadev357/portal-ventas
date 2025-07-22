import React from 'react'
import { useCarrito } from '../context/CarritoContext'

export const Carrito = () => {
    const {carrito} = useCarrito();
  return (
    <div>
        <h2>Carro de la compra</h2>
        {carrito.length === 0 ? (
            <p>No hay productos en el carro</p>
        ) : (
            carrito.map((producto, index)=>(
                <div key={index}>
                    <img src={producto.url} alt={producto.alt} width={100}/>
                    <p>{producto.marca} - {producto.modelo}</p>
                    <p>Talla: {producto.talla}</p>
                    <p>Precio: {producto.precio}</p>
                </div>
            ))
        )}
    </div>
  )
}
