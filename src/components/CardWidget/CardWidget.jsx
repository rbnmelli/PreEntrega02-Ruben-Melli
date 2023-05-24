import React from 'react'
import './CardWidget.css'

const CardWidget = () => {
    const imgCarrito = '../public/images/carritoCompras.png'
    return (
        <div>
            <img className='imgCarrito' src={imgCarrito} alt="carrito" />
            <strong> 3 </strong>
        </div>
    )
}

export default CardWidget