import React from 'react';
import { NavLink } from 'react-router-dom';
/**
 * Componente Tarjeta productos.
 * Recibe como @param{producto} del componente Productos.js
 * importado en el componente Persona.
 * El componente Tarjeta productos se encarga de renderizar los
 * productos.
 */

export const TarjetaProductos = ({producto}) => {
  return (
    <NavLink to='/producto'>
        <div key={producto.id} className='product'>
            
            <img src={producto.url} alt={producto.alt} width='150px' height='150px'/>
            <div>
            <h3>Descripción producto</h3>
            <ul>
                <li>{producto.categoria}</li>
                <li>{producto.marca}</li>
                <li>{producto.modelo}</li>
                <li>{producto.precio} €</li>
                <li>{producto.color}</li>
            </ul>
            </div>
            <span>{producto.talla.join(', ')}</span>
            
        </div>
    </NavLink>
        )
}
