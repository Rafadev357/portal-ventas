import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../Submenu.css'

/**
 * 
 * @param {submenu, value} param0 
 * @returns Una lista renderizada con cada uno de los elementos
 * que componen el objeto submenu.
 */

export const MostrarSubmenu = ({submenu, persona}) => {

    const navigate = useNavigate();
        return (
            <ul className={styles.submenu__list} >
                        {submenu.map(item =>{
                    return <li key={item.id}><button onClick={()=>{
                        navigate(`/${persona}`, {
                            state: {
                                persona,
                                categoria: item.categoria
                            }
                        })
                    }}>{item.categoria}</button></li>
                })}
            </ul>
        )
}
