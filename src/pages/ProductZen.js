import ProductPage from "../components/ProductPage";
import ProductPageOption from "../components/ProductPageOption";

export default function ProductZen() {
    return (
        <ProductPage
            link="Discmania > Driver > Fairway diver > 
            Zen 2 - Nate Perkins Signature Series (Meta Essence)"
            img="Bilder/zen1big.png"
            alt="Discmania Zen 2 - Nate Perkins Signature series"
            title="Zen 2 - Nate Perkins Signature Series"
            stats="8 | 6 | -2 | 1"
            info="Nate Perkins' second signature release of the 
            Meta Essence brings a new balance to your fairway 
            and distance game.

            Attacking the course efficiently requires a thoughtful 
            mindset, and the Zen is the perfect disc to do it with. 
            Any player will find their own creative use with what 
            fits their own throwing style best.
            
            The Meta plastic is a beautiful, pearly and extremely 
            durable blend. Compared to Neo and Lux plastics, 
            the Meta plastic is slight more stable. The iridescent 
            qualities of Meta plastic will make the disc change 
            colors in any lightning conditions when tilted at 
            different angles, making it an even more unique experience.
            
            By purchasing this Signature Series release, you 
            directly support Nate Perkins on Tour!"
            price="239 sek"
        >
            <ProductPageOption 
                colorWeight="Rosa 173g (red metallic)"
            />
            <ProductPageOption 
                colorWeight="Lila 173g (gold)"
            />
            <ProductPageOption 
                colorWeight="Rosa 174g (red metallic)"
            />
            <ProductPageOption 
                colorWeight="Lila 174g (gold star sparkle)"
            />
        </ProductPage>
    )
}