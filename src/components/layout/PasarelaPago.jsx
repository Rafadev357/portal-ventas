import React from 'react'
import { useCarrito } from '../context/CarritoContext'

export const PasarelaPago = () => {
    const { carrito } = useCarrito();
    const { precioTotal } = useCarrito();
  return (
    <div className='layout__pasarela-pago'>
        <div className='layout__pasarela-pago__formulario'>
            <h2>Danos tus datos para la compra:</h2>
            <form action="">
                <label htmlFor="nombre">
                    Nombre:
                <input type="text" id="nombre" name="nombre" required />
                </label>
                <label htmlFor="apellidos">
                    Apellidos:
                <input type="text" id="apellidos" name="apellidos" required />
                </label>
                <label htmlFor="direccion">
                    Dirección:
                <input type="text" id="direccion" name="direccion" required />
                </label>
                <label htmlFor="telefono">
                    Teléfono:
                <input type="tel" id="telefono" name="telefono" required />
                </label>
                <label htmlFor="email">
                    Email:
                <input type="email" id="email" name="email" required />
                </label>
                <label htmlFor="metodo">
                    Método de pago:
                    <select name="metodo" id="metodo" required>
                        <option value="tarjeta">Tarjeta de crédito</option>
                        <option value="paypal">PayPal</option>
                        <option value="transferencia">Transferencia bancaria</option>
                    </select>
                </label>
                <button>confirmar compra</button>
            </form>
        </div>
        <div className='layout__pasarela-pago__resumen'>
            <h3>Resumen de la compra:</h3>
            <ul>
                {carrito.map((producto, index)=>(
                    <li key={{index}}>
                        {producto.marca} - Modelo: {producto.modelo} - Talla: {producto.talla} - Precio: {producto.precio * producto.cantidad} € - Cantidad {producto.cantidad}
                    </li>
                ))}
            </ul>
            <h3>Total a pagar:</h3>
            <span>{precioTotal} €</span>
        </div>
    </div>
  )
}
