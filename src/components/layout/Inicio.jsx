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

    // Al porner el return fuera del bucle, aseguramos que se renderice una vez que se hayan seleccionado los productos aleatorios.
    // Esto es importante para evitar múltiples renders innecesarios.
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
        <div className="content__descripction">
          <p>En TodoSport, creemos que cada paso cuenta. 
            Somos tu nueva tienda online dedicada a ofrecerte la más amplia selección de zapatillas de deporte, 
            diseñadas para llevar tu rendimiento y estilo al siguiente nivel. Ya seas un atleta profesional, 
            un entusiasta del fitness o simplemente busques la comodidad perfecta para tu día a día, 
            aquí encontrarás ese par ideal que se adapta a cada una de tus necesidades.
          </p>

          <p>Explora nuestro catálogo cuidadosamente seleccionado con las últimas tendencias y tecnologías de las 
            marcas líderes. Desde modelos de alto rendimiento para running y entrenamiento, hasta las zapatillas 
            más icónicas para tu estilo urbano, en TodoSport la calidad, la comodidad y el diseño se unen en cada producto.
          </p>

          <p>Prepárate para equipar tus pies con lo mejor y alcanzar tus metas. ¡Tu aventura comienza aquí, en TodoSport!</p>
        </div>
        <h2>Productos destacados</h2>
        <div>
          <ProductosAleatorios/>
        </div>
    </div>
  )
}
