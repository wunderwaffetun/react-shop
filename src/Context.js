import React, { useReducer } from "react";
import reducer from "./reducer";

const initialState = {
    loading: true,
    goods: [],
    goodsInCart: [],
    isBasketActive: false,
    alertName: ''
}

export const ShopContext = React.createContext()

export default function ShopContextWrapper({children}){
    const [value, dispatch] = useReducer(reducer, initialState)

    value.alertClear = () => {
        dispatch({type: 'ALERT_CLEAR', params: {}})
    }

    value.changeActive = () => {
        dispatch({type: 'CHANGE_ACTIVE', params: {}})
    }

    value.addGoodToTheCart = (clickedObject) => {
        dispatch({type: 'ADD_GOOD_TO_THE_CART', params: {clickedObject}})
    }

    value.changeGoodsValueInCart = (sign, id) => {
        dispatch({type: 'CHANGE_GOODS_VALUE_IN_CART', params: {sign, id}})
    }

    value.setGoods = (array) =>{
        dispatch({type: 'SET_GOODS', params: {array}})
    }

    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}