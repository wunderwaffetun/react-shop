export default function CardItem(props) {
    const {mainId: id, displayName: title, regularPrice: price, quantity, image, displayDescription, changeGoodsValueInCart} = props
    return <li className="collection-item">
            <div className="li-cart-main-content">
                <div className="li-content-image" style={{'maxHeight': '80px', 'maxWidth': '80px'}} >
                    {image}
                </div>
                <div className="li-cart-content">
                    <div className="li-cart-info">
                        <span className="li-title">{title} </span>
                        <span className="li-price">{price} руб.</span>

                        <button onClick={()=>{changeGoodsValueInCart('DELETE', id)}} className="delete-li"><i className="material-icons">delete</i></button>

                    </div>
                    <div className="li-cart-description">
                    {displayDescription !== '' ? displayDescription: 'Нет описания'}
                    </div>
                    <div className="li-cart-price">
                        {
                            quantity === 1 ? <button className="li-cart-button" disabled style={{'opacity': '0.5'}}>-</button> : <button className="li-cart-button" onClick={()=>{changeGoodsValueInCart('MINUS', id)}}>-</button>
                        }
                        {quantity}
                        <button className="li-cart-button" onClick={()=>{changeGoodsValueInCart('PLUS', id)}}>+</button>
                        </div>
                </div>
            </div>
        </li>
}