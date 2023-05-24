import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({ games }) => {
    return (
        <div className='contenedorGames'>
            {
                games.map(game => <Item key={game.id}{...game} />)
            }
        </div>
    )
}

export default ItemList