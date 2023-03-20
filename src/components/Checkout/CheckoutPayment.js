export default function CheckoutPayment() {
    return (
        <div className="order">
            <h3>Betalmetod</h3>
            <label>
                <span>Kortbetalning</span>
                <input type="radio" name="dbt" value="dbt" defaultChecked={true} /> 
            </label>
            <label>
                <span>Swish</span>
                <input type="radio" name="dbt" value="cd" />
            </label>
            <label>
                <span>Paypal</span>
                <input type="radio" name="dbt" value="cd" />
            </label>
            <label>
                <span>Presentkort</span>
                <input type="radio" name="dbt" value="cd" />
            </label>
        </div>
    )
}