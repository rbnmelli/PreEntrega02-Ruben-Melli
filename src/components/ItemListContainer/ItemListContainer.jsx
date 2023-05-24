import React from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { getGames, getPlataforma } from '../../assets/asyncmocks';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [games, setGames] = useState([]);
    const { plataforma } = useParams();
    useEffect(() => {

        const funcionGames = plataforma ? getPlataforma : getGames;

        funcionGames(plataforma)
            .then(respuesta => setGames(respuesta))
            .catch(error => console.log(error));

    }, [plataforma]);
    return (
        <div>
            <h4>{greeting}</h4>
            <ItemList games={games} />
        </div>
    )
}

export default ItemListContainer