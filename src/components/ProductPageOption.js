function ProductPageOption(props) {
    return(
        <label>
            <input type="radio" name="disc" value="color"/> {props.colorWeight}
        </label>
    )
}

export default ProductPageOption;