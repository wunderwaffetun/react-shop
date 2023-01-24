import React from 'react'
import { useState, useEffect} from 'react'
import { API_KEY, API_URL } from '../config'
import Preloader from '../components/Preloader'
import GoodsList from '../components/GoodsList'
import Cart from '../components/Cart'
import CartPopup from '../components/CartList'
import Alert from '../components/Alert'

function changeHandler(goodsInCart, index, operation) { // обработчик событий корзины (срабатывает по нажатии +, -, delete)
    const newGoodsInCart = goodsInCart.reduce((resultArr, good, i) => {
        if(index === i){
            if(operation !== "DELETE"){
                resultArr.push({
                    ...good, 
                    quantity: operation === "MINUS" ? good.quantity - 1 : good.quantity + 1
                })
            }  
        } else {
            resultArr.push(good)
        }
        return resultArr
    }, [])
    return newGoodsInCart
}


export default function Shop(){
    const [loading, setLoading] = useState(true)
    const [goods, setGoods] = useState([])
    const [goodsInCart, setGoodsInCart] = useState([])
    const [isBasketActive, setIsBasketActive] = useState(false)
    const [alertName, setAlertName] = useState('')

    const alertClear = () => {
        setAlertName('')
    }

    const changeActive = () => {
        setIsBasketActive(!isBasketActive)
    }
    
    const addGoodToTheCart = (clickedObject) => {
        setAlertName(clickedObject.displayName)
        const index = goodsInCart.findIndex((item) => {
            return item.mainId === clickedObject.mainId; 
        })
        if (~index){ //Если есть в goods
            const newGoodsInCart = goodsInCart.map((good, i) => {
                if(i === index){
                    return {
                        ...good, 
                        quantity: good.quantity + 1
                    }
                } else {
                    return good
                }
            })
            setGoodsInCart(newGoodsInCart)
        } else {
            const newItem = {
                ...clickedObject, 
                quantity: 1
            }
            setGoodsInCart([...goodsInCart, newItem])
        }
    }
    
    const changeGoodsValueInCart = (sign, id) =>{
        const index = goodsInCart.findIndex((item, index) => item.mainId === id)
        switch (sign){
            case 'PLUS':
                setGoodsInCart(changeHandler(goodsInCart, index, 'PLUS'))
                break
            case 'MINUS':
                setGoodsInCart(changeHandler(goodsInCart, index, 'MINUS'))
                break
            case 'DELETE':
                setGoodsInCart(changeHandler(goodsInCart, index, 'DELETE'))
                break
            default:
                throw new Error('whats type???')
        }
    }

    useEffect(()=>{
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY
            }
        })
        .then(response => response.json())
        .then(data => {
            setLoading(false)
            data.shop && setGoods(data.shop)
        })
    }, [])

    return(
        <main className='container content'>
            <Cart quantity={goodsInCart.length} changeActive={changeActive}></Cart>
            {loading ? <Preloader/> : <GoodsList goods={goods} addFunc={addGoodToTheCart}></GoodsList>}
            {isBasketActive ? <CartPopup goodsInCart={goodsInCart} changeGoodsValueInCart={changeGoodsValueInCart} changeActive={changeActive}></CartPopup> : null}
            {alertName && <Alert alertName={alertName} alertClear={alertClear}></Alert>}
        </main>
    )
}