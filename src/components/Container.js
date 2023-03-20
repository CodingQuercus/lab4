export default function Container(props) {
    return (
        <div className="grid-container">
            {props.children}
        </div>
    )
}