import React from "react";

import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel";

import ProductsData from "../data/ProductsData";

export default function Home() {
    return (
        <main>
            <div className="main-content">
                <h2>Välkommen till Micke's Discgolf!</h2>
                <Carousel />
                <h3>Senaste produkterna</h3>
                <div className="content">
                    {ProductsData.map((product) =>
                        <ProductCard 
                            img={product.img}
                            alt={product.alt}
                            link={product.link}
                            title={product.title}
                            stats={product.stats}
                            price={product.price}
                        />
                    )}
                </div>
            </div>
        </main>
    )
}
