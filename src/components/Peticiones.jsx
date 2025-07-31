import React, { useState, useEffect } from 'react'

export const Peticiones = () => {
    const [pelicula, setPelicula]= useState(null);
    const [cargando, setCargando]= useState(true);

    useEffect(()=>{
        const url = 'https://www.omdbapi.com/?t=terminator+2&apikey=3251bd86';

    const request = async ()=>{
        try{
            const response = await fetch(url);
            const data = await response.json();
            setPelicula(data);
        }catch(error){
            console.error(error);
        }finally{
            setCargando(false);
        }
    };
    request();
    }, []);

    console.log(pelicula);
    
    if(cargando){
        return <h2>Cargando...</h2>
    }else if(!pelicula){
        return <h2>No se encontró la película</h2>
    }
        return (
            <div className='anuncio'>
                <h1>{pelicula.Title}</h1>
                <img src={pelicula.Poster} alt={pelicula.Title} />
                <h3>Géneros:</h3>
                <p>{pelicula.Genre}</p>
            </div>
        );
    }
