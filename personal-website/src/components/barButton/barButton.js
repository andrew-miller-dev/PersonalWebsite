import './barButton.css'

export default function BButton (props) {
    return (
        <button class="button">
            {props.text}
        </button>
    )
}