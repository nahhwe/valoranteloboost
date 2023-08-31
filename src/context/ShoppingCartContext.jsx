import {createContext, useState} from 'react'

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({children})=>{

  const  [cart, setCart] = useState([])
  console.log(cart)

const clearCart = () =>{
  setCart([]);
}

let totalFinal = 0

const totalCart = cart.forEach(p => {
  totalFinal = cart.reduce((acc, product) => {
    return acc + (product.price * product.count);
  }, 0);
});

const totalItems = cart.reduce((total, product) => total + product.count, 0);

const removeProduct = (product) =>{
  const cartUpdated = cart.filter((prod) => prod.id !== product.id);
  console.log(product.id)
  console.log(cartUpdated)
  setCart(cartUpdated)
}

    return(
        <CartContext.Provider value={{cart, setCart, clearCart, totalItems, totalFinal, removeProduct}}>
            {children}
        </CartContext.Provider>
    )
}

const ShoppingCartContext = () => {
  return (
    <div>ShoppingCartContext</div>
  )
}

export default ShoppingCartProvider