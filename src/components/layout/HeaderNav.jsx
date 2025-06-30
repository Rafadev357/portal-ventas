import React from 'react'
import { NavLink } from 'react-router'
import { OnMouseEnter } from '../OnMouseEnter';
export const HeaderNav = () => {
    const onMouseEnter = ()=>{};
    const onMouseLeave = ()=>{};
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
            <li>
                <NavLink to='/hombre' onMouseEnter={onMouseEnter}>Hombre</NavLink>
            </li>
            <li>
                <NavLink to='/mujer'>Mujer</NavLink>
            </li>
            <li>
                <NavLink to='/niños'>Niños</NavLink>
            </li>
            <li>
                <NavLink to='/rebajas'>Rebajas</NavLink>
            </li>
        </ul>
    </nav>
   </header>
  )
}
