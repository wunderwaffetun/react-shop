import { useContext } from "react"
import { ShopContext } from "../Context"

export default function Cart(){
    const {goodsInCart, changeActive} = useContext(ShopContext)
    const quantity = goodsInCart.length
    return <button className="cart-wrapper" onClick={changeActive}>
        <i className="material-icons market-icon blue darken-4">add_shopping_cart</i>
        <span className="quantity">{quantity}</span>
    </button>
}