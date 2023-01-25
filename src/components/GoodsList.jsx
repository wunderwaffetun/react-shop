import GoodsItem from "./GoodsItem"
import { useContext } from "react"
import { ShopContext } from "../Context"

export default function GoodsList(){
    const {goods = [], addGoodToTheCart} = useContext(ShopContext)
    return (
        <div className="goods">
            {
                goods.map((item, i) => {
                    return <GoodsItem key={i} goods={ {...item} } addGoodToTheCart={ addGoodToTheCart }></GoodsItem>
                })
            }
        </div>
    )
}