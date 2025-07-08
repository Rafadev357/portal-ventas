import React from 'react'

/**
 * 
 * @param {submenu, value} param0 
 * @returns Una lista renderizada con cada uno de los elementos
 * que componen el objeto submenu.
 */

export const MostrarSubmenu = ({submenu, value}) => {
        return (
            <ul className='submenu__list'>
                        {submenu.map(item =>{
                    return <li key={item.id}><input type='submit' value={item.categoria}/></li>
                })}
            </ul>
        )
}
