import ProductPage from "../components/ProductPage";
import ProductPageOption from "../components/ProductPageOption";

export default function ProductLoneHowl() {
    return (
        <ProductPage
            link="Discmania > Driver > Fairway diver
            > Lone Howl 3 - Colten Montgomery"
            img="Bilder/lonehowlbig.png"
            alt="Discmania Lone Howl 3 - Colten Montgomery"
            title="Lone Howl 3 - Colten Montgomery"
            stats="10 | 4 | 0 | 3"
            info="Colten Montgomery's Lone Howl gains a shiny metal flake 
                flair and returns for a third helping in the form of Lone Howl 3. 
                The triad of wolves pictured on this design pay tribute to the 
                original version released back in 2019 This is the first ever 
                PD released in our new metal flake plastic and it did not disappoint! 
                Flat and durable with grippy C-Line plastic to give it that extra “bite”.

                Compared to the current reinvented runs of PD produced so far, 
                the Lone Howl sits happily in the middle between C-Line and the
                recent straighter flying Nordic Phenom.
                
                Sales of this disc help to directly support Colten on tour."
            price="239 sek"
        >
            <ProductPageOption 
                colorWeight="Vit 173g"
            />
            <ProductPageOption 
                colorWeight="Blå 173g"
            />
            <ProductPageOption 
                colorWeight="Vit 174g"
            />
            <ProductPageOption 
                colorWeight="Blå 174g"
            />
            <ProductPageOption 
                colorWeight="Vit 175g"
            />
            <ProductPageOption 
                colorWeight="Vit 176g"
            />
        </ProductPage>

    )
}