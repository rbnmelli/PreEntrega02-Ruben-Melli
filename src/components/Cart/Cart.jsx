import React from 'react'
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import './Cart.css'

const Cart = () => {
    const { cart, removeCart, total, cantidadTotal } = useContext(CartContext);
    if (cantidadTotal === 0) {
        <>
            <h2>No hay productos en el carrito</h2>
            <Link to='/'>Ver productos</Link>
        </>
    }
    return (
        <div className='cartContainer'>
            {cart.map(producto => <CartItem Key={producto.id} {...producto} />)}
            <h3>Total: $ {total}</h3>
            <h3>Cantidad total: {cantidadTotal}</h3>
            <button onClick={() => removeCart()}>Vaciar carrito</button>
            <Link to='/checkOut'>Finalizar compra</Link>
        </div>
    )
}

export default Cart