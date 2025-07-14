import React, { useEffect, useState } from 'react';
import { Productos } from '../products/Productos';
import { useLocation, useNavigate } from 'react-router-dom';
import { TarjetaProductos } from '../products/TarjetaProductos';
import { FiltroProductos } from '../forms/FiltroProductos';

export const Personas = () => {
        /**
         * Uso el hook useLocation para recoger el atributo state en el Navlink
         * const {persona} = location.state || {}; En esta sentencia utilizo la desestructuración
         * de objetos para acceder a la propiedad persona y darle el valor contenido en location.state
         * o un objeto vacío en caso de que location.state fuera undefined.
         */
        const location = useLocation();
        /**
         * El hook useNavigate se usa para redirigir al usuario a otra ruta de forma programática.
         * Aquí lo utilizamos para enviar al usuario a otra página si falta el estado necesario.
         */
        const navigate = useNavigate();
        const {persona} = location.state || {};
        const {categoria} = location.state || {};
        const [filtros, setFiltros] = useState(null);

        /**
         * Con useEffect validamos si el valor de `persona` está definido.
         * Si no lo está, redirigimos al usuario a la página de inicio.
         */
        useEffect(()=>{
            if(!persona){
                console.warn('persona es undefined. Redirigiendo...');
                navigate('/error', {replace: true}); //`replace: true` evita que el usuario pueda volver atrás a la ruta inválida
            }
        }, [persona, navigate]);

        //Esta función se encarga de actualizar el estado de la variable filtros con los datos del formulario
        const manejarFiltros = (data)=>{
            setFiltros(data);
        };
        console.log('Estos son los filtros recogidos del componente FiltroProductos: ', filtros);
        console.log('Se está renderizando ProductosFiltrados');

        if(persona && !categoria && filtros){

            return <ProductosFiltrados productos={Productos} filtros={filtros}/>

                
        }else if(persona && !categoria){
            // Filtrar los productos según la propiedad persona recibida
                const productosFiltrados = Productos.filter(
                    (producto)=> persona && producto.persona.includes(persona)
                );

                // En caso de no haber producto se muestra un mensaje informativo
                if(productosFiltrados.length === 0){
                    return <p>No se encontraron productos para {persona}</p>
                }
                console.log(persona);
            
        
            return (
                <>
                    <aside className='content__sidebar'>
                        <FiltroProductos onFiltrar={manejarFiltros}/>
                    </aside>
                    <div className='content__products'>
                        {productosFiltrados.map(producto =>{
                            return <TarjetaProductos key={producto.id} producto={producto}/>
                        })}
                    </div>
                    <aside className='content__sidebar'>anuncios</aside>
                </>
                
            )
        }else{
            const cat_minusculas = categoria.toLowerCase();
            console.log(cat_minusculas);
            const productosFiltrados = Productos.filter(
                (producto)=>{
                    const filtrado_personas = producto.persona.includes(persona); 
                    const filtrado_categoria = producto.categoria.includes(cat_minusculas);
                    return filtrado_categoria && filtrado_personas;
                }
            );

            if(productosFiltrados.length === 0){
                return <p>No se encontraron productos para {persona} y {categoria}</p>
            }

            return(
                <>
                    <aside className='content__sidebar'>filtrar</aside>
                    <div className='content__products'>
                        {productosFiltrados.map(producto =>{
                            return <TarjetaProductos key={producto.id} producto = {producto}/>
                        })}
                    </div>
                    <aside className='content__sidebar'>anuncios</aside>
                </>
            )
        }
}

function ProductosFiltrados({productos, filtros}){

    console.log('Filtros recibidos: ', filtros);
    console.log('Productos recibidos: ', productos);
    const filtrados = productos.filter((producto)=>{
        console.log('Evaluando producto: ', producto);
        const marcaOk = filtros.marca ? producto.marca === filtros.marca : true;
        const tallaOk = filtros.talla_elegido ? producto.talla.includes(filtros.talla_elegido)  : true;
        const colorOk = filtros.color_elegido ? producto.color === filtros.color_elegido : true;
        const precioOk = producto.precio >= Number(filtros.precio_min) && producto.precio <= Number(filtros.precio_max);
        
        return marcaOk && tallaOk && colorOk && precioOk;
    });

    return(
        <>
            <h3>Productos encontrados: {filtrados.length}</h3>
            {filtrados.map((filt)=>{
                return <TarjetaProductos key={filt.id} producto = {filt}/>
            })}
        </>
    )
}
