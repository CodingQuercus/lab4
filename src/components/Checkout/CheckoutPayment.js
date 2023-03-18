function CheckoutPayment() {
    return (
        <div className="order">
            <h3>Betalmetod</h3>
            <div>
                <input type="radio" name="dbt" value="dbt" /> Kortbetalning
            </div>
            <div>
                <input type="radio" name="dbt" value="cd" /> Swish
            </div>
            <div>
                <input type="radio" name="dbt" value="cd" /> Paypal
            </div>
            <div>
                <input type="radio" name="dbt" value="cd" /> Presentkort
            </div>
            <button type="submit">Beställ</button>
        </div>
    )
}

export default CheckoutPayment;