import React from 'react'
import { TarjetaProductos } from '../products/TarjetaProductos'
import { Productos } from '../products/Productos'


const ProductosAleatorios = () => {
    const productosAleatorios = [];

    // Para evitar IDs duplicados si la lista de productos no es muy grande.
    // Si tu lista 'Productos' es muy grande, esto podría ser menos eficiente.
    const idsUsados = new Set();

    while(productosAleatorios.length < 4 && productosAleatorios.length < Productos.length) {
      // Genera un índice aleatorio dentro del rango de productos
        const indiceAleatorio = Math.floor(Math.random() * Productos.length);
        const producto = Productos[indiceAleatorio];

        // Verifica si el ID ya ha sido usado
        if (!idsUsados.has(producto.id)) {
            const productoEncontrado =Productos.find(producto => producto.id === indiceAleatorio);
            if (productoEncontrado) {
                productosAleatorios.push(productoEncontrado);
                idsUsados.add(producto.id); // Marca este ID como usado
            }
        }
    }

    return (
      <div className="layout__aleatorio">
        {productosAleatorios.map(producto => (
          <TarjetaProductos key={producto.id} producto ={producto} />
        ))}
      </div>
    )
  };

export const Inicio = () => {
  /**
   * Componente Inicio que muestra un mensaje de bienvenida y una breve descripción
   * de la tienda. No requiere lógica adicional ni estado.
   */

  return (
    <div className='layout__inicio'>
        <h1>Bienvenido a TodoSport</h1>
        <p>Tu tienda de deportes en línea</p>
        <p>Explora nuestras categorías: Hombre, Mujer, Niños y Rebajas.</p>
        <div>
          <ProductosAleatorios/>
        </div>
    </div>
  )
}
