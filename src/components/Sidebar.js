import React from "react";

import ProductCard from "../components/ProductCard";

import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="products">
                <h2>Produkter</h2>
                <ul className="product-list">
                    <Dropdown
                        link="/product"
                        title="Latitude64"
                    >
                        <DropdownItem
                            link="/product"
                            title="Distance Driver"
                        />
                        <DropdownItem
                            link="/product"
                            title="Fairway Driver"
                        />
                        <DropdownItem
                            link="/product"
                            title="Midrange"
                        />
                        <DropdownItem
                            link="/product"
                            title="Putter"
                        />
                    </Dropdown>
                    <Dropdown
                        link="/product"
                        title="Westside"
                    >
                        <DropdownItem
                            link="/product"
                            title="Distance Driver"
                        />
                        <DropdownItem
                            link="/product"
                            title="Fairway Driver"
                        />
                        <DropdownItem
                            link="/product"
                            title="Midrange"
                        />
                        <DropdownItem
                            link="/product"
                            title="Putter"
                        />
                    </Dropdown>
                    <Dropdown
                        link="/product"
                        title="Dynamic Discs"
                    >
                        <DropdownItem
                            link="/product"
                            title="Distance Driver"
                        />
                        <DropdownItem
                            link="/product"
                            title="Fairway Driver"
                        />
                        <DropdownItem
                            link="/product"
                            title="Midrange"
                        />
                        <DropdownItem
                            link="/product"
                            title="Putter"
                        />
                    </Dropdown>
                    <Dropdown
                        link="/product"
                        title="Discmania"
                    >
                        <DropdownItem
                            link="/product"
                            title="Distance Driver"
                        />
                        <DropdownItem
                            link="/product"
                            title="Fairway Driver"
                        />
                        <DropdownItem
                            link="/product"
                            title="Midrange"
                        />
                        <DropdownItem
                            link="/product"
                            title="Putter"
                        />
                    </Dropdown>
                    <Dropdown
                        link="/product"
                        title="Kastaplast"
                    >
                        <DropdownItem
                            link="/product"
                            title="Distance Driver"
                        />
                        <DropdownItem
                            link="/product"
                            title="Fairway Driver"
                        />
                        <DropdownItem
                            link="/product"
                            title="Midrange"
                        />
                        <DropdownItem
                            link="/product"
                            title="Putter"
                        />
                    </Dropdown>
                    <Dropdown
                        link="/product"
                        title="Innova"
                    >
                        <DropdownItem
                            link="/product"
                            title="Distance Driver"
                        />
                        <DropdownItem
                            link="/product"
                            title="Fairway Driver"
                        />
                        <DropdownItem
                            link="/product"
                            title="Midrange"
                        />
                        <DropdownItem
                            link="/product"
                            title="Putter"
                        />
                    </Dropdown>
                    <Dropdown
                        link="/product"
                        title="Clash"
                    >
                        <DropdownItem
                            link="/product"
                            title="Distance Driver"
                        />
                        <DropdownItem
                            link="/product"
                            title="Fairway Driver"
                        />
                        <DropdownItem
                            link="/product"
                            title="Midrange"
                        />
                        <DropdownItem
                            link="/product"
                            title="Putter"
                        />
                    </Dropdown>
                    <Dropdown
                        link="/product"
                        title="Momentum Disc"
                    >
                        <DropdownItem
                            link="/product"
                            title="Distance Driver"
                        />
                        <DropdownItem
                            link="/product"
                            title="Fairway Driver"
                        />
                        <DropdownItem
                            link="/product"
                            title="Midrange"
                        />
                        <DropdownItem
                            link="/product"
                            title="Putter"
                        />
                    </Dropdown>
                    <Dropdown
                        link="/product"
                        title="Korgar och banmaterial"
                    >
                        <DropdownItem
                            link="/product"
                            title="Korgar"
                        />
                        <DropdownItem
                            link="/product"
                            title="Banmaterial"
                        />

                    </Dropdown>
                    <Dropdown
                        link="/product"
                        title="Väskor och minidiscar"
                    >
                        <DropdownItem
                            link="/product"
                            title="Väskor"
                        />
                        <DropdownItem
                            link="/product"
                            title="Minidiscar"
                        />
                    </Dropdown>
                    <Dropdown
                        link="/product"
                        title="Presentkort"
                    />
                </ul>
            </div>
            <div className="news">
                <h2>Nyheter</h2>
                <div className="news-items">
                    <ProductCard
                        img="Bilder/zen1.png"
                        alt="Discmania Zen 2 - Nate Perkins"
                        link="/productzen"
                        title="Zen 2 - Nate Perkins"
                        stats="8 | 6 | -2 | 1"
                        price="239 sek"
                    />
                    <ProductCard
                        img="Bilder/mermaid.png"
                        alt="Discmania Mermaid Active Line"
                        link="/productmermaid"
                        title="Mermaid Active Line"
                        stats="7 | 4 | -1 | 2"
                        price="99 sek"
                    />
                    <ProductCard
                        img="Bilder/lonehowl.png"
                        alt="Discmania Lone Howl 3 - Colten Montgomery"
                        link="/productlonehowl"
                        title="Lone Howl 3 - Colten Montgomery"
                        stats="10 | 4 | 0 | 3"
                        price="239 sek"
                    />
                </div>
            </div>
            <div className="information">
                <h2>Information</h2>
                <p className="information-text">
                    <strong>Hittar du inte en disc i den färg, vikt eller typ som du eftersöker. </strong>

                    Maila till info@mickesdiscgolf.se. Vi undersöker då om vi kan ta in den i lager.
                    <br /><br />
                    <strong>Fraktkostnad Sverige </strong>
                    <br />
                    27 kronor på discar. Vid order över 1000kr är det fri frakt.
                    <br /><br />
                    <strong>Finland och Danmark</strong>
                    <br />
                    Se villkor och info.
                    <br /><br />
                    <strong>Övriga länder</strong>
                    <br />
                    Ingen leverans för tillfället.
                </p>
            </div>
        </div>
    )
}