import React from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../../services/config';

const ItemListContainer = ({ greeting }) => {
    const [games, setGames] = useState([]);
    const { plataforma } = useParams();

    useEffect(() => {
        const misProductos = plataforma ? query(collection(db, 'games'), where('plataforma', '==', plataforma)) : collection(db, 'games');
        getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setGames(nuevosProductos);
            })
            .catch(error => console.log(error))

    }, [plataforma])

    return (
        <div>
            <h4>{greeting}</h4>
            <ItemList games={games} />
        </div>
    )
}

export default ItemListContainer