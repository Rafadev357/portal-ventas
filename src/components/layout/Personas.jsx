import React, { useEffect } from 'react';
import { Productos } from '../products/Productos';
import { useLocation, useNavigate } from 'react-router-dom';
import { TarjetaProductos } from '../products/TarjetaProductos';

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


        if(persona && !categoria){

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
            <div className='content__products'>
                {productosFiltrados.map(producto =>{
                    return <TarjetaProductos key={producto.id} producto={producto}/>
                })}
            </div>
        )
        }else{
            const cat_minusculas = categoria.toLowerCase();
            console.log(cat_minusculas);
            const productosFiltrados = Productos.filter(
                (producto)=>{
                    persona && producto.persona.includes(persona) && 
                    producto.categoria.includes(cat_minusculas)
                }
            );

            if(productosFiltrados.length === 0){
                return <p>No se encontraron productos para {persona} y {categoria}</p>
            }

            return(
                <div className='content__products'>
                    {productosFiltrados.map(producto =>{
                        return <TarjetaProductos key={producto.id} producto = {producto}/>
                    })}
                </div>
            )
        }
}
