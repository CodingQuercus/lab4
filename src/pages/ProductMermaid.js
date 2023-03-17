import ProductPage from "../components/ProductPage";
import ProductPageOption from "../components/ProductPageOption";

export default function ProductMermaid() {
    return (
        <ProductPage
            link="Discmania > Driver > Fairway driver > 
            Mermaid Active Line (Floats in water)"
            img="Bilder/mermaidbig.png"
            alt="Discmania Active Line Mermaid"
            title="Mermaid Active Line (Floats in water)"
            stats="7 | 4 | -1 | 2"
            info="Known for living underwater, the Mermaid is never in trouble 
            when water is involved. Introducing our first floating disc, 
            this fairway driver is a wise choice in holes with some water 
            nearby. Throw the Mermaid and you will never have to be afraid 
            of losing your disc in the water!

            The Mermaid flies straight through the fairways with a slight 
            turn and a reliable finish at the end of its flight, making 
            it a versatile driver to execute different lines. The Mermaid 
            features a mild dome and feels comfortable in hand."
            price="199 sek"
        >
            <ProductPageOption 
                colorWeight="Neonrosa 156g"
            />
            <ProductPageOption 
                colorWeight="Ljusblå 157g"
            />
            <ProductPageOption 
                colorWeight="Neonrosa 157g"
            />
            <ProductPageOption 
                colorWeight="Vit 159g"
            />
        </ProductPage>
    )
}