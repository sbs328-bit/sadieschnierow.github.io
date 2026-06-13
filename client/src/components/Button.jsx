export default function Button({ color = "white", children, url }) {

        const styles = {
                red: {bg: "#eec8c8", accent: "#BD1E1E"},
                blue: {bg: "#c4cadd", accent: "#172653"},
                white: {bg: "#00000000", accent: "#f7f8f5"}
        }

        return (
            <a href={url} >
            <button style={{
                fontFamily: "'Crimson Pro', serif",
                color: `${styles[color].accent}`,
                backgroundColor: "#00000000",
                cursor: "pointer",
                border: `${styles[color].accent} solid 1.5px`,
                width: "fit-content",
                borderRadius: "999px",
                padding: "2px 10px",
                margin: "4px 0px",
            }}>
                <h5>{children}</h5>
            </button>
            </a>
        )

}