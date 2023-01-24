export default function Cart(props){
    const {quantity, changeActive} = props
    return <button className="cart-wrapper" onClick={changeActive}>
        <i className="material-icons market-icon blue darken-4">add_shopping_cart</i>
        <span className="quantity">{quantity}</span>
    </button>
}