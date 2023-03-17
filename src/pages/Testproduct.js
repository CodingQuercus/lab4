import React from "react";
import ProductPage from "../components/ProductPage";
import ProductPageOption from "../components/ProductPageOption";

function Testproduct() {
    return (
        <ProductPage 
            link="Kastaplast > Fairway Driver > K1 Soft Kaxe X Moomin"
            img="Bilder/moominsniff.png"
            alt="K1 Soft Kaxe X Moomin - Sniff"
            title="K1 Soft Kaxe X Moomin - Sniff"
            stats="6 | 4 | 0 | 3"
            price="199 sek"
        >
            <ProductPageOption 
                colorWeight="Neonrosa 156g"
            />
        </ProductPage>
    )
}

export default Testproduct;