import React from 'react'
import { useCarrito } from '../context/CarritoContext'

export const PasarelaPago = () => {
    const { precioTotal } = useCarrito();
  return (
    <div>{precioTotal}</div>
  )
}
