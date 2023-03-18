import CheckoutCard from "../components/Checkout/CheckoutCard";
import CheckoutForm from "../components/Checkout/CheckoutForm";

export default function Checkout() {
    return (
        <main>
            <div className="main-content">
                <h2>Varukorg</h2>
                <CheckoutCard
                    title="Zen 2 - Nate Perkins"
                    img="Bilder/zen1.png"
                    price="239 sek"
                />
                <CheckoutForm />
            </div>
        </main>
    )
}