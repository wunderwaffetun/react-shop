function updateGoodsInCart(newGoodsInCart, state, params) {
    return{
        ...state, 
        alertName: params.clickedObject.displayName,
        goodsInCart: newGoodsInCart
    }
}

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



export default function reducer(state, {type, params}){

    let index = null; // индекс кликнутого элемента, используется в 2 последних кейсах

    switch(type){
        case 'SET_GOODS':
            return {
                ...state, 
                goods: params.array,
                loading: false
            }
        case 'ALERT_CLEAR':
            return {
                ...state, 
                alertName: ''
            }
        case 'CHANGE_ACTIVE':
            return {
                ...state, 
                isBasketActive: !state.isBasketActive
            }
        case 'ADD_GOOD_TO_THE_CART':
            index = state.goodsInCart.findIndex(item => item.mainId === params.clickedObject.mainId)


            if (~index){ //Если есть в goods
                const newGoodsInCart = state.goodsInCart.map((good, i) => {
                    if(i === index){
                        return {
                            ...good, 
                            quantity: good.quantity + 1
                        }
                    } else {
                        return good
                    }
                })
                return updateGoodsInCart(newGoodsInCart, state, params)
            } else { // Если ещё нет в корзине
                const newItem = {
                    ...params.clickedObject, 
                    quantity: 1
                }
                return updateGoodsInCart([...state.goodsInCart, newItem], state, params)
            }

        case 'CHANGE_GOODS_VALUE_IN_CART': 
            const {sign, id} = params
            index = state.goodsInCart.findIndex(item => item.mainId === id)
            switch (sign){ // По какой кнопке элемента корзины был клик
                case 'PLUS':
                    return{
                        ...state,
                        goodsInCart: changeHandler(state.goodsInCart, index, 'PLUS')
                    }
                case 'MINUS':
                    return{
                        ...state,
                        goodsInCart: changeHandler(state.goodsInCart, index, 'MINUS')
                    }
                case 'DELETE':
                    return{
                        ...state,
                        goodsInCart: changeHandler(state.goodsInCart, index, 'DELETE')
                    }
                default:
                    throw new Error('whats type???')
            }
        
        default:
            return state
    }
}