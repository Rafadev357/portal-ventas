import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Inicio } from '../components/layout/Inicio';
import { NotFound } from '../components/layout/NotFound';
import { Personas } from '../components/layout/Personas';
import { LayoutProduct } from '../components/products/LayoutProduct';
import { Carrito } from '../components/layout/Carrito';

export const Rutas = () => {
  return (
    <BrowserRouter>
    <HeaderNav/>

    <section className="content">
      
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/inicio' element={<Inicio/>}/>
            <Route path='/hombre' element={<Personas/>}/>
            <Route path='/mujer' element={<Personas/>}/>
            <Route path='/niños' element={<Personas/>}/>
            <Route path='/carro' element={<Carrito/>}/>
            <Route path='/error' element={<NotFound/>}/>
            <Route path='*' element={<NotFound/>}/>
            <Route path='/producto/:id' element={<LayoutProduct/>}/>
        </Routes>
        
        
    </section>
    </BrowserRouter>
  )
}
