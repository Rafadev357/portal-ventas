import React from 'react'

/**
 * 
 * @param {submenu, value} param0 
 * @returns Una lista renderizada con cada uno de los elementos
 * que componen el objeto submenu.
 */

export const MostrarSubmenu = ({submenu, value}) => {
    if(value == 'personas'){
        return (
            <ul className='submenu'>
                        {submenu.map(item =>{
                    return <li key={item.id}>{item.categoria}</li>
                })}
            </ul>
        )
    }else{
        return (
            <ul className='submenu'>
                        {submenu.map(item =>{
                    return <li key={item.id}>{item.categoria}</li>
                })}
            </ul>
        )
    }
}
