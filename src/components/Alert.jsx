import { useEffect, useContext } from "react";
import { ShopContext } from "../Context";
export default function Alert(props){
    const { alertName, alertClear } = useContext(ShopContext)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            alertClear()
        }, 2000)
        return ()=>{
            clearInterval(timer)
        }
    //eslint-disable-next-line
    }, [alertName])

    return <div id="toast-container">
        <div className="toast">Товар {alertName} добавлен в корзину</div>
    </div>
}