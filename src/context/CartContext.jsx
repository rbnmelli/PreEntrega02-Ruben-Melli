import { useState, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
    cantidadTotal: 0
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    const addProd = (item, cantidad) => {
        const existingProd = cart.find(prod => prod.item.id === item.id);
        if (!existingProd) {
            setCart(prev => [...prev, { item, cantidad }]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        } else {
            const upCart = cart.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad }
                } else {
                    return prod;
                }
            });
            setCart(upCart);
        }
    }

    const removeProd = (id) => {
        const removedProd = cart.find(prod => prod.item.id === id);
        const upCart = cart.filter(prod => prod.item.id !== id);
        setCart(upCart);
        setCantidadTotal(prev => prev - removedProd.cantidad);
        setTotal(prev => prev - (removedProd.item.precio * removedProd.cantidad));
    }

    const removeCart = () => {
        setCart([]);
        setCantidadTotal(0);
        setTotal(0);
    }

    return (
        <CartContext.Provider value={{ cart, addProd, removeProd, removeCart, total, cantidadTotal }}>
            {children}
        </CartContext.Provider>
    )
}