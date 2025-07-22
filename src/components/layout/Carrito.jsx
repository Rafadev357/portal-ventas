import React, { useState } from 'react'
import { useCarrito } from '../context/CarritoContext'

export const Carrito = () => {
    const {carrito} = useCarrito();
    const {eliminarProducto} = useCarrito();
    const [unidades, setUnidades] = useState(1);

    const unidadesProducto= (x)=>{
        setUnidades(unidades + x)
    };
  return (
    <div>
        <h2>Carro de la compra</h2>
        {carrito.length === 0 || unidades<= 0 ? (
            <p>No hay productos en el carro</p>
        ) : (
            carrito.map((producto, index)=>(
                <div key={index}>
                    <img src={producto.url} alt={producto.alt} width={100}/>
                    <p>{producto.marca} - {producto.modelo}</p>
                    <p>Talla: {producto.talla}</p>
                    <p>Precio: {producto.precio}</p>
                    <button onClick={()=>eliminarProducto(producto.id)}>Eliminar</button>
                    <button onClick={()=> unidadesProducto(1)}>
                        <img src='/img/iconos/mas.png' alt='simbolo mas' width={20}/>
                    </button>
                    <div>
                        <span>{unidades}</span>
                    </div>
                    <button onClick={()=> unidadesProducto(-1)}>
                        <img src='/img/iconos/menos.png' alt='simbolo menos' width={20}/>
                    </button>
                </div>
            ))
        )}
        <div>
            <h3>Total</h3>
        </div>
    </div>
  )
}
