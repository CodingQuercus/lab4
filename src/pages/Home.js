import React from "react";

import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel";

export default function Home() {
    return (
        <main>
            <div className="main-content">
                <h2>Välkommen till Micke's Discgolf!</h2>
                <Carousel />
                <h3>Senaste produkterna</h3>
                <div className="content">
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
                    <ProductCard
                        img="Bilder/moominsniff.png"
                        alt="K1 Soft Kaxe X Moomin - Sniff"
                        link="/testproduct"
                        title="K1 Soft Kaxe X Moomin - Sniff"
                        stats="6 | 4 | 0 | 3"
                        price="199 sek"
                    />
                    <ProductCard
                        img="Bilder/moomintroll.png"
                        alt="K3 Reko X Moomin - Moomintroll"
                        link="/product"
                        title="K3 Reko X Moomin - Moomintroll"
                        stats="3 | 3 | 0 | 2"
                        price="149 sek"
                    />
                    <ProductCard
                        img="Bilder/moomin.png"
                        alt="K3 Berg X Moomin - Moomin"
                        link="/product"
                        title="K3 Berg X Moomin - Moomin"
                        stats="1 | 1 | 0 | 2"
                        price="149 sek"
                    />
                    <ProductCard
                        img="Bilder/moominmamma.png"
                        alt="K1 Lots X Moomin - Moominmamma"
                        link="/product"
                        title="K1 Lots X Moomin - Moominmamma"
                        stats="9 | 5 | -1 | 2"
                        price="199 sek"
                    />
                    <ProductCard
                        img="Bilder/moominsnufkin.png"
                        alt="K1 Soft Berg X Moomin - Snufkin"
                        link="/product"
                        title="K1 Soft Berg X Moomin - Snufkin"
                        stats="1 | 1 | 0 | 2"
                        price="199 sek"
                    />
                    <ProductCard
                        img="Bilder/moomingroke.png"
                        alt="K1 Guld (HalvGlow) X Moomin - The Groke"
                        link="/product"
                        title="K1 Guld X Moomin - The Groke"
                        stats="13 | 5 | -0.5 | 3"
                        price="199"
                    />
                    <ProductCard
                        img="Bilder/orbit.png"
                        alt="GETAWAY Fuzion Orbit - Mason Ford"
                        link="/product"
                        title="Fuzion Orbit - Mason Ford"
                        stats="9 | 5 | -0.5 | 3"
                        price="269 sek"
                    />
                    <ProductCard
                        img="Bilder/hope.png"
                        alt="Hope Royal Sense Orbit"
                        link="/product"
                        title="Hope Royal Sense Orbit"
                        stats="2 | 3 | 0 | 1"
                        price="169 sek"
                    />
                    <ProductCard
                        img="Bilder/escape.png"
                        alt="Escape Supreme - First Run"
                        link="/product"
                        title="Escape Supreme - First Run"
                        stats="9 | 5 | -1 | 2"
                        price="239 sek"
                    />
                </div>
            </div>
        </main>
    )
}