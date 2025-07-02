import React, { useState } from 'react'
import { NavLink } from 'react-router'
import { MostrarSubmenu } from '../MostrarSubmenu';
export const HeaderNav = () => {

    /**
     * Utilizo el hook useState para actualizar el estado
     * cuando pase el ratón sobre cada uno de los elementos del nav.
     * Este cambio de estado desemboca en llamar al component MostrarSubmenu
     * que renderiza en una lista los elementos del objeto submenu.
     */
    const [enter, setEnter] = useState(null);


    /**
     * Constantes personas y rebajas se utilizarán pasandolas
     * como props al componente MostrarSubmenu y en función de cual
     * se mande se renderizará un listado u otro
     */
    
    const personas = 'personas';
    const rebajas = 'rebajas';

    const onMouseLeave = ()=> {
        setEnter(null);
        console.log('Al quitar el puntero el estado de enter ha cambiado a: ' + enter);
    };

    /**
     * El objeto subMenu será el que se renderice en la lista
     * cuando personas se pase como props a MostarSubmenu
     */

    const subMenu = [
        {
            id: 0,
            categoria: 'Casual'
        },
        {
            id: 1,
            categoria: 'Futbol'
        },
        {
            id: 2,
            categoria: 'Running'
        }
    ];


    /**
     * El objeto subMenuRebajas será el que se renderice en la lista
     * cuando rebajas se pase como props a MostrarSbumenu
     */

    const subMenuRebajas = [
        {
            id: 0,
            categoria: '30% de descuento'
        },
        {
            id: 1,
            categoria: '50% de descuento'
        },
        {
            id: 2,
            categoria: '70% de descuento'
        }
    ];
    

return (
   <header className="content__header">
    <div className="content__logo">
        <span className='logo'></span>
        <h1>Todo Sport</h1>
    </div>

    <nav>
        <ul>
            <li>
                <NavLink to='/inicio'>Inicio</NavLink>
            </li>
            <li onMouseEnter={()=> {setEnter('hombre');
                console.log('El estado de enter ha cambiado a: '+ enter);
                }} onMouseLeave={onMouseLeave}>
                <NavLink to='/hombre'>Hombre</NavLink>
                <div>
                    {enter == 'hombre' && <MostrarSubmenu submenu = {subMenu} value={personas}/>}
                </div>
            </li>
            <li onMouseEnter={()=> {
                setEnter('mujer');
                console.log('El estado de enter ha cambiado a: '+ enter);
                }} onMouseLeave={onMouseLeave}>
                <NavLink to='/mujer'>Mujer</NavLink>
                <div>
                    {enter == 'mujer' && <MostrarSubmenu submenu = {subMenu} value={personas}/>}
                </div>
            </li>
            <li onMouseEnter={()=> {
                setEnter('niños');
                console.log('El estado de enter ha cambiado a: '+ enter);
                }} onMouseLeave={onMouseLeave}>
                <NavLink to='/niños'>Niños</NavLink>
                <div>
                    {enter == 'niños' && <MostrarSubmenu submenu = {subMenu} value={personas}/>}
                </div>
            </li>
            <li onMouseEnter={()=> {
                setEnter('rebajas');
                console.log('El estado de enter ha cambiado a: '+ enter);
                }} onMouseLeave={onMouseLeave}>
                <NavLink to='/rebajas'>Rebajas</NavLink>
                <div>
                    {enter == 'rebajas' && <MostrarSubmenu submenu = {subMenuRebajas} value={rebajas}/>}
                </div>
            </li>
        </ul>
    </nav>
   </header>
  )
}
