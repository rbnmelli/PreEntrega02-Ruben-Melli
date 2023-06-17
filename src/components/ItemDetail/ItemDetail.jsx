import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const ItemDetail = ({ id, nombre, detalle, plataforma, precio, genero, img, stock }) => {
    const [addgame, setAaddGame] = useState(0);
    const { addProd } = useContext(CartContext);
    const cantHandle = (cantidad) => {
        setAaddGame(cantidad);
        // console.log(`Productos agregados ${cantidad}`);
        const item = { id, nombre, precio };
        addProd(item, cantidad);
    }

    return (
        <div className='cardDetail' key={id}>
            <h3>ID: {id}</h3>
            <h1>{nombre}</h1>
            <img src={img} alt={nombre} />
            <h2>Detalle:</h2>
            <p>{detalle}</p>
            <h3>Plataforma: {plataforma}</h3>
            <h3>Genero: {genero}</h3>
            <h1>$ {precio}</h1>
            {
                addgame > 0 ? (<Link to='/cart'> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} addFuntion={cantHandle} />)
            }
        </div >
    )
}

export default ItemDetail