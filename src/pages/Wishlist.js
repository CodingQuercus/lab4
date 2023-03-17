import ProductCard from "../components/ProductCard";

export default function Wishlist() {
    return (
        <main>
            <div className="main-content">
                <h2>Önskelista</h2>
                <p>Här visas de produkter du har valt att markera som favoriter</p>
                <div className="wishlist-items">
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
                        link=""
                        title="K1 Soft Kaxe X Moomin - Sniff"
                        stats="6 | 4 | 0 | 3"
                        price="199 sek"
                    />
                    <ProductCard
                        img="Bilder/moomintroll.png"
                        alt="K3 Reko X Moomin - Moomintroll"
                        link=""
                        title="K3 Reko X Moomin - Moomintroll"
                        stats="3 | 3 | 0 | 2"
                        price="149 sek"
                    />
                </div>
            </div>
        </main>
    )
}