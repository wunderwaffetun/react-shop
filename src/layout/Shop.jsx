import React from 'react'
import { useEffect, useContext} from 'react'
import { API_KEY, API_URL } from '../config'
import { ShopContext } from '../Context'
import Preloader from '../components/Preloader'
import GoodsList from '../components/GoodsList'
import Cart from '../components/Cart'
import CartPopup from '../components/CartList'
import Alert from '../components/Alert'


export default function Shop(){
    const {setGoods, loading,  isBasketActive, alertName} = useContext(ShopContext)


    useEffect(()=>{
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY
            }
        })
        .then(response => response.json())
        .then(data => {
            data.shop && setGoods(data.shop)
        })
    //eslint-disable-next-line
    }, [])

    return(
        <main className='container content'>
            <Cart />
            {loading ? <Preloader /> : <GoodsList />}
            {isBasketActive ? <CartPopup /> : null}
            {alertName && <Alert />}
        </main>
    )
}