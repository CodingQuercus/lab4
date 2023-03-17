import React from "react";

import { Link } from "react-router-dom";

import { useState } from "react";

function ProductCard(props) {

    const [over, setOver] = useState(true);

    const toggleShadow = () => {
        setOver(!over)
    };

    const [favorite, setFavorite] = useState(true);

    const addFavoriteItem = () => {
        setFavorite(!favorite)
    };

    return (
        <div className="item-card" onMouseEnter={toggleShadow} onMouseLeave={toggleShadow} id={over? "" : "active"}>
            <div className="item-image">
                <img src={props.img} alt={props.alt}/>
            </div>
            <div className="item-content">
                <Link to={props.link}>
                    <h4>{props.title}</h4>
                </Link>
                <p className="item-stats">{props.stats}</p>
                <p className="item-price"><strong>{props.price}</strong></p>
            </div>
            <div className="card-buttons">
                <button className="add-favorite" onClick={addFavoriteItem}>
                    <img src="BilderSmaller/favorite_border_black_36dp.svg" alt="Lägg till i ön skelista"
                        className="favorite-icon" id={favorite ? "active" : ""}/>
                    <img src="BilderSmaller/favorite_red_36dp.svg" alt="Lagt till i önskelista"
                        className="added-favorite-icon" id={favorite ? "" : "active"}/>
                </button>
                <button className="add-shopping">
                    <img src="BilderSmaller/add_shopping_cart_black_36dp.svg" alt="Lägg till i Varukorg" />
                </button>
            </div>
        </div>
    )
}

export default ProductCard;