import React from "react";

import { Link } from "react-router-dom";

export default function Header() {

    return (
        <header>
            <div className="favorite">
                <Link to="/wishlist" className="favorite-button">
                    <img src="/BilderSmaller/favorite_black_36dp.svg" alt="Önskelista" />
                </Link>
            </div>
            <figure id="logo">
                <Link to="/">
                    <img src="Bilder/logo.png" alt="Micke's Discgolf logo" />
                </Link>
            </figure>
            <div className="cart">
                <Link to="/checkout" className="shopping-button">
                    <img src="BilderSmaller/shopping_cart_black_36dp.svg" alt="Varukorg" />
                </Link>
            </div>
        </header>
    )
}