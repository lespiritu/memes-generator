
import logo from "./images/Troll Face.png";
import "./header.css"

export default function Header(){
    return(
        <div className="header">
            <div className="logo-panel">
                <img src={logo} alt="logo" />
                <h2>Memes Generator</h2>
            </div>

            <h4>React Project</h4>
        </div>
    )
}