import CheckoutCard from "../components/Checkout/CheckoutCard";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import CheckoutPayment from "../components/Checkout/CheckoutPayment";
import CheckoutTotalTable from "../components/Checkout/CheckoutTotalTable";

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
                <h3>Att betala</h3>
                <CheckoutTotalTable />
                <CheckoutPayment />
            </div>
        </main>
    )
}