import CheckoutPayment from "./CheckoutPayment";
import CheckoutTotalTable from "./CheckoutTotalTable"

function CheckoutForm() {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Tack för din beställning!");
    }

    return (
        <form action="" method="" className="form-checkout" onSubmit={handleSubmit}>
            <h3>Kundinformation</h3>
            <label>
                <span className="fname">Förnamn <span className="required"> *</span></span>
                <input type="text" name="fname" />
            </label>
            <label>
                <span className="lname">Efternamn <span className="required"> *</span></span>
                <input type="text" name="lname" />
            </label>
            <label>
                <span className="cname">Företag</span>
                <input type="text" name="cname" />
            </label>
            <label>
                <span>Land<span className="required"> *</span></span>
                <select name="selection">
                    <option value="select">Välj ett land...</option>
                    <option value="DEN">Danmark</option>
                    <option value="FIN">Finland</option>
                    <option value="SWE">Sweden</option>
                </select>
            </label>
            <label>
                <span>Adress<span className="required"> *</span></span>
                <input type="text" name="adress" placeholder="" />
            </label>
            <label>
                <span>Ort<span className="required"> *</span></span>
                <input type="text" name="city" placeholder="" />
            </label>
            <label>
                <span>Postnummer<span className="required"> *</span></span>
                <input type="text" name="postnumber" placeholder="" />
            </label>
            <label>
                <span>Telefon<span className="required"> *</span></span>
                <input type="tel" name="telephone" placeholder="" />
            </label>
            <label>
                <span>E-post<span className="required"> *</span></span>
                <input type="email" name="email" placeholder="" />
            </label>
            <h3>Att betala</h3>
            <CheckoutTotalTable/>
            <CheckoutPayment/>
            <br />
            <button className="order-button" type="submit">Beställ</button>
        </form>
    )
}

export default CheckoutForm;