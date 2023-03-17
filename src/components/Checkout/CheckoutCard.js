import React from "react"

function CartCard(props) {
    return(
        <div className="cart-card">
                <h4>{props.title}</h4>
                <div className="cart-item-image">
                    <img src={props.img} alt={props.alt} />
                </div>
                <div className="item-price">{props.price}</div>
        </div>
    )
}

export default CartCard;