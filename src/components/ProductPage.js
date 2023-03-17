import React from "react";

import { Link } from "react-router-dom";
import { useState } from "react";

function ProductPage(props) {
    const [favorite, setFavorite] = useState(true);

    const addFavoriteItem = () => {
        setFavorite(!favorite)
    };

    return (
        <main>
            <div className="main-content">
                <div className="main-title">
                    <Link to="/product">
                        {props.link}
                    </Link>
                    <div className="product-card">
                        <div className="product-image">
                            <img src={props.img} alt={props.alt} className="disc-image" />
                        </div>
                        <p className="product-title">
                            <Link to="/testproduct">
                                <strong>{props.title}</strong>
                            </Link>
                        </p>
                        <p className="stats">
                            {props.stats}
                        </p>
                        <p className="product-info">
                            {props.info}
                        </p>
                        <div className="disc-choice">
                            <p><strong>Färg- och viktval</strong></p>
                            {props.children}
                        </div>
                        <p className="price">
                            <strong>{props.price}</strong>
                        </p>

                        <div className="card-buttons">
                            <button className="add-favorite" onClick={addFavoriteItem}>
                                <img src="BilderSmaller/favorite_border_black_36dp.svg" alt="Lägg till i ön skelista"
                                    className="favorite-icon" id={favorite ? "active" : ""} />
                                <img src="BilderSmaller/favorite_red_36dp.svg" alt="Lagt till i önskelista"
                                    className="added-favorite-icon" id={favorite ? "" : "active"} />
                            </button>
                            <button className="add-shopping">
                                <img src="BilderSmaller/add_shopping_cart_black_36dp.svg" alt="Lägg till i Varukorg" />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProductPage;