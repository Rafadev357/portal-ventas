import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Inicio } from '../components/Inicio';
import { Hombre } from '../components/Hombre';
import { Mujer } from '../components/Mujer';
import { Niños } from '../components/Niños';
import { Rebajas } from '../components/Rebajas';

export const Rutas = () => {
  return (
    <BrowserRouter>
    <HeaderNav/>

    <section className="content">
        <Routes>
            <Route path='/inicio' element={<Inicio/>}/>
            <Route path='/hombre' element={<Hombre/>}/>
            <Route path='/mujer' element={<Mujer/>}/>
            <Route path='/niños' element={<Niños/>}/>
            <Route path='/rebajas' element={<Rebajas/>}/>
        </Routes>
    </section>
    </BrowserRouter>
  )
}
