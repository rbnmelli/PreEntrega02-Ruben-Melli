import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const CartItem = ({ item, cantidad }) => {
    const { removeProd } = useContext(CartContext);
    return (
        <div>
            <h4>{item.nombre}</h4>
            <p>Cantidad: {cantidad}</p>
            <p>Precio: {item.precio}</p>
            <button onClick={() => removeProd(item.id)}>Eliminar</button>
        </div>
    )
}

export default CartItem