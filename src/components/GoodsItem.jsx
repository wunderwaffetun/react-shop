import React from "react";
import { useContext } from "react"
import { ShopContext } from "../Context"

function requestImage (src, alt) {
    const image = <img src={src} alt={alt} />
    return image
}



export default function GoodsItem({goods, addGoodToTheCart}) {

    const {
        mainId,
        displayName,
        displayDescription,
        displayAssets: [{background: src,},], // :src - просто переназвали
        price: {regularPrice}
    } = goods; 

    const image = requestImage(src, displayName)
    
    return (
        <div className="card">
            <div className="card-image">
                {image}
                <span className="card-title">{displayName}</span>
            </div>
            <div className="card-content">
                <p>
                    {displayDescription !== '' ? displayDescription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam doloribus tempore voluptatem eveniet '}
                </p>
            </div>
            <div className="card-action">
                <button className="btn left" onClick = { ()=>{ addGoodToTheCart({mainId, displayName, regularPrice, image, displayDescription}) } }>Купить</button>
                <span className="right">{regularPrice}</span>
            </div>  
        </div>
    )

}
