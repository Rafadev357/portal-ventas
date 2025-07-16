import React, { useEffect, useState } from 'react';
import { Productos } from '../products/Productos';
import { useLocation, useNavigate } from 'react-router-dom';
import { TarjetaProductos } from '../products/TarjetaProductos';
import { FiltroProductos } from '../forms/FiltroProductos';
import { ProductosFiltrados } from '../products/ProductosFiltrados';

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
        const {persona, categoria} = location.state || {};
        const [filtros, setFiltros] = useState(null);
        const [criterio, setCriterio] = useState({persona, categoria});

        /**
         * Con useEffect validamos si el valor de `persona` está definido.
         * Si no lo está, redirigimos al usuario a la página de inicio.
         */

        /*useEffect(()=>{
            if(!persona){
                console.warn('persona es undefined. Redirigiendo...');
                navigate('/error', {replace: true}); //`replace: true` evita que el usuario pueda volver atrás a la ruta inválida
            }
        }, [persona, navigate]);*/


        /**
         * Este useEffect se ejecutará cuando cambie la navegación
         */

        useEffect(()=>{
            if(!location.state){
                console.warn('persona es undefined. Redirigiendo...');
                navigate('/error', {replace: true}); //`replace: true` evita que el usuario pueda volver atrás a la ruta inválida
            }else{
                setCriterio({
                    persona: location.state.persona,
                    categoria: location.state.categoria
                });
                setFiltros(null); //Se resetean los filtros al cambiar la fuente
            }
        }, [location.state]);



        //Esta función se encarga de actualizar el estado de la variable filtros con los datos del formulario
        const manejarFiltros = (data)=>{
            setFiltros(data);
        };

        const productoBase = Productos.filter((producto)=>
            criterio.persona ? producto.persona.includes(criterio.persona) : true
        );

        const productosCategoria = criterio.categoria
            ? productoBase.filter((producto)=> producto.categoria.includes(criterio.categoria.toLowerCase())) :
            productoBase;
        
        const productosFinales = filtros ?
            productosCategoria.filter((producto)=>{
                const marcaOk = filtros.marca ? producto.marca === filtros.marca : true;
                const tallaOk = filtros.talla_elegido ? producto.talla.includes(filtros.talla_elegido)  : true;
                const colorOk = filtros.color_elegido ? producto.color.includes(filtros.color_elegido) : true;
                const precioOk = producto.precio >= Number(filtros.precio_min) && producto.precio <= Number(filtros.precio_max);
                
                return marcaOk && tallaOk && colorOk && precioOk;
            }) :
            productosCategoria;
        
        return(
            <>
                <aside className='content__sidebar'>
                    <FiltroProductos onFiltrar={manejarFiltros}/>
                </aside>
                <div className="content__products">
                    {productosFinales.length === 0 ? 
                        (<p>No se encontraron productos.</p>) : (
                            productosFinales.map(producto =>(
                                <TarjetaProductos key={producto.id} producto={producto}/>
                            ))
                        )
                    }
                </div>
                <aside className="content__sidebar">anuncios</aside>
            </>
        )
}
