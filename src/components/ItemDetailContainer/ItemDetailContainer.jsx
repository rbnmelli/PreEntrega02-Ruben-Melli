import React from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/config';


const ItemDetailContainer = () => {
    const [games, setGames] = useState(null);

    const { idItem } = useParams();

    useEffect(() => {
        const nuevoDoc = doc(db, 'games', idItem);

        getDoc(nuevoDoc)
            .then(res => {
                const data = res.data();
                const nuevoproducto = { id: res.id, ...data }
                setGames(nuevoproducto);
            })
            .catch(error => console.log(error))
    }, [idItem])

    return (
        <div>
            <ItemDetail {...games} />
        </div>
    )
}

export default ItemDetailContainer