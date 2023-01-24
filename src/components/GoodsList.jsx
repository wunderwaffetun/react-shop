import GoodsItem from "./GoodsItem"

export default function GoodsList(props){
    const {goods = [], addFunc} = props
    return (
        <div className="goods">
            {
                goods.map((item, i) => {
                    return <GoodsItem key={i} goods={ {...item} } addFunc={ addFunc }></GoodsItem>
                })
            }
        </div>
    )
}