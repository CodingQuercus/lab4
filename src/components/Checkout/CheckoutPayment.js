function CheckoutPayment() {
    return (
        <div className="payment">
            <h3>Betalmetod</h3>
            <input type="radio" name="dbt" value="dbt" /> Kortbetalning
            <input type="radio" name="dbt" value="cd" /> Swish
            <input type="radio" name="dbt" value="cd" /> Paypal
            <input type="radio" name="dbt" value="cd" /> Presentkort
        </div>
    )
}

export default CheckoutPayment;