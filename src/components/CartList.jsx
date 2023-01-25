import CardItem from "./CartItem"
import { useContext } from "react"
import { ShopContext } from "../Context"

export default function CartPopup(){
    const {goodsInCart, changeGoodsValueInCart, changeActive} = useContext(ShopContext)
    let cost = 0

    return <ul className="collection">
                <li className="collection-item active">
                    <div className="name-cart">Корзина</div>
                    <button className="main-cross" onClick={changeActive}><i className="material-icons" style={{'color': 'white'}}>close</i></button>
                </li>
                {
                    goodsInCart.length ? goodsInCart.map((good, item) => {
                        cost += good.quantity * good.regularPrice
                        return <CardItem key={good.mainId} changeGoodsValueInCart={changeGoodsValueInCart} {...good}></CardItem>
                    }) : <li className="collection-item">Здесь пока ничего нет</li>
                }
                {
                    goodsInCart.length ? 
                        <li className="collection-item">Общая стоимость:  {cost} руб.
                            <button className="btn-small" style={{'marginLeft': '30px'}}>Оформить</button>
                        </li>
                        
                    : null}
        </ul>
}