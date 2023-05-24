import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({ id, nombre, detalle, plataforma, precio, genero, img }) => {
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
            <button> Agragar al Carrito</button>
        </div>
    )
}

export default ItemDetail