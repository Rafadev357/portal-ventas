import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Productos } from './Productos';
import { useCarrito } from '../context/CarritoContext';

export const LayoutProduct = () => {
  const {añadirProducto} = useCarrito();
  const {id} = useParams();
  const [tallaElegida, setTalla] = useState(null);
  const [compraProduct, setCompra] = useState({});
  const guardados = [];

  const producto = Productos.find(p => p.id === parseInt(id));
  

  const elegirTalla = (e)=>{
    setTalla(e.target.value);
  };

  const tallas = producto.talla.map((t, i) =><li key={i}><button onClick={elegirTalla} value={t}>{t}</button></li>);

  const guardarProducto = (producto)=>{
    producto.talla = tallaElegida
    guardados.push(JSON.stringify(producto));
    localStorage.setItem('Productos', guardados);
  };

  const comprarProducto = (producto)=>{
    /*producto.talla = tallaElegida;
    let {id, marca, modelo, color, talla, precio} = producto;
    console.log('Voy a comprar este producto: ', marca, modelo, color, precio, talla);*/
    const objetoCompra = {...producto, talla: tallaElegida, cantidad: 1};
    console.log('Esta es la copia de producto: ',objetoCompra);
    añadirProducto(objetoCompra);
  };

  return (
    <>
      <main className='layout__product'>
        <section className='layout__information'>
          <img src={producto.url} alt={producto.alt} width='150px' height='150px'/>
          
          <div className='layout__desc'>
            <h2>Descripción de las {producto.marca} {producto.modelo}</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec augue feugiat, porta ex at, 
                bibendum tortor. Integer eleifend mattis mauris sed tempor. Duis ac quam aliquet, facilisis ex non, sodales turpis. 
                Pellentesque ut turpis odio. Etiam ac auctor ante, nec egestas quam. Nam nec purus ut leo condimentum malesuada nec in eros. 
                Donec at nibh ex. Sed sit amet ligula ac ligula mattis gravida id vitae urna. Nam egestas fringilla magna,
                sed pellentesque neque convallis a. Sed placerat lorem sit amet ante placerat semper. Mauris pellentesque, 
                sapien laoreet fringilla varius, tellus elit euismod diam, dapibus porttitor massa mi iaculis justo. 
                Aliquam sed interdum velit. Quisque molestie mauris sit amet velit consequat, a mattis massa facilisis. 
                Cras malesuada, ipsum sit amet fringilla eleifend, arcu turpis sollicitudin dolor, nec malesuada metus libero non orci. 
                Nullam elementum tempus turpis, et molestie erat bibendum sit amet. Sed scelerisque faucibus hendrerit.
                Vestibulum ac tellus luctus, posuere leo ac, ultricies eros. Nulla neque massa, facilisis sit amet pellentesque nec, 
                scelerisque sit amet justo. Morbi vulputate consectetur leo in maximus. Morbi odio ligula, malesuada vitae enim hendrerit, 
                varius tristique risus. Nulla sagittis dui nec sagittis tempor. Pellentesque in dictum nunc, ac posuere risus. 
                Quisque vitae sem mollis, dictum dolor ac, dignissim felis. Aliquam justo eros, auctor nec suscipit sit amet, 
                cursus ut mi. Nunc arcu libero, cursus ac ultricies vitae, dapibus id nunc.
                Suspendisse justo sem, auctor vel euismod nec, fringilla a ipsum. Sed hendrerit non elit ut semper. 
                Ut imperdiet, velit quis condimentum pellentesque, arcu magna ultrices quam, vitae suscipit mi massa ac purus. 
                Ut fringilla lorem vitae neque consectetur, at porttitor ante blandit. In rutrum eros et sodales egestas. 
                Integer pharetra egestas eros vel commodo. Fusce laoreet erat ac pellentesque viverra. Aliquam eget luctus massa. 
                Nam vel felis sapien. In ultricies ligula nec turpis vulputate vestibulum. Cras non purus nec enim pellentesque posuere. 
            </p>
          </div>
        </section>
        <section className='layout__function'>
          <div className='layout__function-info'>
            <ul>{tallas}</ul>
            <p>Precio: <span>{producto.precio}€</span></p>
          </div>
          <div>
            <p>Aquí va el botón de añadir al carro y el botón de guardar en favoritos</p>
            <button onClick={()=> guardarProducto(producto)}>Guardar en favoritos</button>
            <button onClick={()=>comprarProducto(producto)}>Comprar</button>
          </div>
        </section>
      </main> 
      <aside></aside>
    </>
  )
}
