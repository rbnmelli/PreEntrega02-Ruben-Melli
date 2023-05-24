import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, detalle, precio, plataforma, genero, img }) => {
    return (
        <div className='cardGames'>
            <img className='imgGame' src={img} alt={nombre} />
            <h5>ID: {id}</h5>
            <h3>{nombre}</h3>
            <h3>Plataforma: {plataforma}</h3>
            <h2>$ {precio}</h2>
            <Link to={`/item/${id}`} className='btnDetalle'> Ver detalles </Link>
        </div>
    )
}

export default Item