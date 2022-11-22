import BButton from '../barButton/barButton'
import './infobar.css'

export default function InfoBar (props) {
    return(
        <div className="infobar">
            <BButton text="test"></BButton>
            <BButton text="test2"></BButton>
            <BButton text="test3"></BButton>
            <BButton text="Contact Me"></BButton>
        </div>
    )
}