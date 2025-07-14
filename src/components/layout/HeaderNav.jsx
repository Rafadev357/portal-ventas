import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MostrarSubmenu } from '../MostrarSubmenu';


export const HeaderNav = () => {

    /**
     * Utilizo el hook useState para actualizar el estado
     * cuando pase el ratón sobre cada uno de los elementos del nav.
     * Este cambio de estado desemboca en llamar al component MostrarSubmenu
     * que renderiza en una lista los elementos del objeto submenu.
     */
    const [enter, setEnter] = useState(null);
    const [locked, setLocked] = useState(false);

    //useRef para referenciar un valor
    const timeoutRef = useRef(null);

    /**
     * Constantes personas y rebajas se utilizarán pasandolas
     * como props al componente MostrarSubmenu y en función de cual
     * se mande se renderizará un listado u otro
     */
    
    const personas = 'personas';
    const rebajas = 'rebajas';

    const onMouseLeave = ()=> {
        timeoutRef.current = setTimeout(()=>{setEnter(null);
        console.log('Al quitar el puntero el estado de enter ha cambiado a: ' + enter);}, 3000);
    };

    const onMouseEnter = (tipo)=> {
        if(timeoutRef.current) clearTimeout(timeoutRef.current);
        setEnter(tipo);
        console.log('El estado de enter ha cambiado a: '+ enter);
    };

    // Esta función impide que el submenú desaparezca antes de que tenga lugar el evento click del botón
    const bloquearSubmenu = ()=>{
        setLocked(true);
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
                <NavLink to='/inicio' className='menu__link'>Inicio</NavLink>
            </li>
            <li>
                <div onMouseEnter={()=>onMouseEnter('hombre')} onMouseLeave={onMouseLeave} style={{position: 'relative'}}>
                        <NavLink to='/hombre' state={{persona: 'hombre'}} className='menu__link'>Hombre</NavLink>
                    
                        {enter == 'hombre' && <div className='submenu'>
                                <MostrarSubmenu submenu = {subMenu} persona= 'hombre'/>
                             </div>
                            }
                   
                </div>
                
            </li>
            <li>
                <div onMouseEnter={()=>onMouseEnter('mujer')} onMouseLeave={onMouseLeave} style={{position: 'relative'}}>
                    <NavLink to='/mujer' state={{persona: 'mujer'}} className='menu__link'>Mujer</NavLink>
                    
                        {enter == 'mujer' && <div className='submenu'>
                            <MostrarSubmenu submenu = {subMenu} persona = 'mujer'/>
                        </div>
                        }
                    
                </div>
            </li>
            <li>
                <div onMouseEnter={()=>onMouseEnter('niños')} onMouseLeave={onMouseLeave} style={{position: 'relative'}}>
                        <NavLink to='/niños' state={{persona: 'niños'}} className='menu__link'>Niños</NavLink>
                            {enter == 'niños' && <div className='submenu'>
                            <MostrarSubmenu submenu = {subMenu} persona = 'niños'/>
                        </div>}
                </div>
            </li>
            <li>
                <div onMouseEnter={()=>onMouseEnter('rebajas')} onMouseLeave={onMouseLeave} style={{position: 'relative'}}>
                    <NavLink to='/rebajas' className='menu__link'>Rebajas</NavLink>
                        {enter == 'rebajas' && <div className='submenu'>
                            <MostrarSubmenu submenu = {subMenuRebajas}/>
                        </div>
                        }
                </div>
            </li>
        </ul>
    </nav>
   </header>
  )
}
