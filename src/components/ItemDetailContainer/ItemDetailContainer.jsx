import React from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useState, useEffect } from 'react';
import { getUnGame } from '../../assets/asyncmocks';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [games, setGames] = useState(null);

    const { idItem } = useParams();

    useEffect(() => {
        getUnGame(idItem)
            .then(respuesta => setGames(respuesta))
    }, [idItem]);
    return (
        <div>
            <ItemDetail {...games} />
        </div>
    )
}

export default ItemDetailContainer