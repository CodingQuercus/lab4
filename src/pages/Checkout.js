import { useState } from "react";

import CheckoutCard from "../components/Checkout/CheckoutCard";
import CheckoutForm from "../components/Checkout/CheckoutForm";

export default function Checkout() {
    const [order, setOrdered] = useState(false)

    const toggleContent = () => {
        setOrdered(!order);
    }

    return (
        <main>
            {!order && (
                <div className="main-content" id={order ? "hide" : ""}>
                    <h2>Kassa</h2>
                    <p>Här visas din varukorg</p>
                    <CheckoutCard
                        title="Zen 2 - Nate Perkins"
                        img="Bilder/zen1.png"
                        price="239 sek"
                    />
                    <CheckoutForm 
                        toggleContent={toggleContent}
                    />
                </div>
            )}
            {order && 
                <div className="thanks">
                    <p className="thanks-message">
                        <strong>Tack för din beställning!</strong>
                        <br /><br />
                        En orderbekräftelse skickas till din e-post inom kort!
                    </p>
                </div>
            }
        </main>
    )
}