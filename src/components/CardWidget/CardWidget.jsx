import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './CardWidget.css';


const CardWidget = () => {
    const { cantidadTotal } = useContext(CartContext)
    const imgCarrito = '../public/images/carritoCompras.png'
    return (
        <div>
            <Link to='/cart'>
                <img className='imgCarrito' src={imgCarrito} alt="carrito" />
                {
                    cantidadTotal > 0 && <span>{cantidadTotal}</span>
                }
            </Link>
        </div>
    )
}

export default CardWidget