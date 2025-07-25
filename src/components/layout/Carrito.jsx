import React from 'react'
import { useCarrito } from '../context/CarritoContext'




export const Carrito = () => {
    const {carrito} = useCarrito();
    const {eliminarProducto, aumentarCantidad, disminuirCantidad, precioTotal } = useCarrito();

    
  return (
    <div className='layout__carrito'>
        <h2>Carro de la compra</h2>
        {carrito.length === 0 ? (
            <p>No hay productos en el carro</p>
        ) : (
            <div className='layout__carrito__productos'>
            {carrito.map((producto, index)=>(
                <div key={index} className='layout__carrito__producto'>
                    <img src={producto.url} alt={producto.alt} width={100}/>
                    <p>{producto.marca} - {producto.modelo}</p>
                    <p>Talla: {producto.talla}</p>
                    <p>Precio: {producto.precio}</p>
                    <button onClick={()=>eliminarProducto(producto.id)}>Eliminar</button>
                    <button onClick={()=>aumentarCantidad(producto.id)}>
                        <img src='/img/iconos/mas.png' alt='simbolo mas' width={20}/>
                    </button>
                    <div className='layout__carrito__cantidad'>
                        <span>{producto.cantidad}</span>
                    </div>
                    <button onClick={()=>disminuirCantidad(producto.id)}>
                        <img src='/img/iconos/menos.png' alt='simbolo menos' width={20}/>
                    </button>                    
                </div>
            ))}
                <div className='layout__carrito__total'>
                    <h3>Total:</h3>
                    <span>{precioTotal}€</span>
                </div>
            </div>
        )} 
    </div>
  )
}
