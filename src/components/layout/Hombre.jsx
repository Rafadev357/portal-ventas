import React from 'react'
import { Productos} from '../ListaProductos'



const MostrarProductos = ()=>{
  
    return (
      <div>
        {Productos.map(producto=>{
          console.log('URL de la imagen: ' + producto.url);
          if(producto && producto.persona.includes('hombre')){
          return(
            <div key={producto.id}>
            <img src={producto.url} alt={producto.alt} width='150px' height='150px'/>
            <div>
              <h3>Descripciíon producto</h3>
              <ul>
                <li>{producto.categoria}</li>
                <li>{producto.marca}</li>
                <li>{producto.modelo}</li>
                <li>{producto.color}</li>
              </ul>
            </div>
            <span>{producto.talla.join(', ')}</span>
          </div>
          )}
        })}
            
      </div>    
    )
  };

export const Hombre = () => {

  

  return (
    <div>
      <MostrarProductos/>
    </div>
  )
}
