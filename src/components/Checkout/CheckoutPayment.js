function CheckoutPayment() {
    return (
        <div className="order">
            <h3>Betalmetod</h3>
            <div>
                <input type="radio" name="dbt" value="dbt" defaultChecked={true} /> Kortbetalning
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
            <button type="button">Beställ</button>
        </div>
    )
}

export default CheckoutPayment;