export default function Button({ color = "red", children }) {

    const styles = {
        red: {bg: "#eec8c8", text: "#BD1E1E"},
        blue: {bg: "#c4cadd", text: "#172653"}
    }

    return (
    <button className="rounded-border">
        <h5>{children}</h5>
    </button>
    )
}