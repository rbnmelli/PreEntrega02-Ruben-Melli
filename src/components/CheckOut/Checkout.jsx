import React from 'react'
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../services/config';
import { collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import './checkout.css'

const Checkout = () => {
    const { cart, removeCart, total } = useContext(CartContext);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmacion, setEmailConfirmacion] = useState('');
    const [error, setError] = useState('');
    const [ordenId, setOrdenId] = useState('');

    const formHandle = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError('Por favor complete todos los campor');
            return;
        }
        if (email !== emailConfirmacion) {
            setError('Los campos de email no coinciden');
        }

        const orden = {
            items: cart.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: cart.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            telefono,
            email
        };

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, 'games', productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;
                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                });
            })
        )
            .then(() => {
                addDoc(collection(db, 'ordenes'), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        removeCart();
                    })
                    .catch(error => {
                        console.error('error', error);
                        setError('Error al crear la orden de compra');
                    })
            })
            .catch((error) => {
                console.error('error', error);
                setError('Error al actualizar el stock');
            })

        // addDoc(collection(db, 'ordenes'), orden)
        //     .then(docRef => {
        //         setOrdenId(docRef.id);
        //         removeCart();
        //     })
        //     .catch(error => {
        //         console.error('error', error);
        //         setError('Error al crear la orden de compra');
        //     })
    }

    return (
        <div className='checkoutContainer'>
            <h2>Checkout</h2>
            <form onSubmit={formHandle}>
                {
                    cart.map(producto => (
                        <div key={producto.item.id}>
                            <p>{producto.item.nombre} x {producto.cantidad}</p>
                            <p>Precio: $ {producto.item.precio}</p>
                            <hr />
                        </div>
                    ))
                }
                <h3>Total: $ {total}</h3>
                <hr />
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Apellido</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Telefono</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">email</label>
                    <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>
                {error && <p> {error} </p>}
                <button type='submit'>Finalizar compra</button>
            </form>
            {
                ordenId && (<strong>Gracias por tu compra! Tu numero de orden es {ordenId}</strong>)
            }
        </div>
    )
}

export default Checkout