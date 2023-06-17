import React from 'react'
import { useState } from 'react'

const ItemCount = ({ stock, inicial, addFuntion }) => {
    const [count, setCount] = useState(inicial);
    const addCount = () => {
        if (count < stock)
            setCount(count + 1);
    }
    const subCount = () => {
        if (count > inicial)
            setCount(count - 1);
    }

    return (
        <>
            <div>
                <button onClick={subCount}> - </button>
                <strong> {count} </strong>
                <button onClick={addCount}> + </button>
            </div>
            <button onClick={() => addFuntion(count)}> Agregar al Carrito </button>
        </>
    )
}

export default ItemCount