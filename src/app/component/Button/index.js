import "./button.scss"

export default function Button({ text, background }) {
    const choices = {
        "transparent": "transparent-background",
        "green": "green-background"
    }
    let clx = choices[background]
    return (
        <button className={`custombtn ${clx}`}>
            {text}
        </button>
    )
}