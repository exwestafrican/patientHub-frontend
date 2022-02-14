import "./heading.scss";
// import "./nav.js";
import {useState} from "react";

export default function NavBar() {
    const [clx, setClx] = useState("navbar-links");
    const [dropDown, setDropDown  ] = useState(false);


    function handleToggleClick(){
        console.log("click me")
        if (dropDown){
            console.log("if block")
            setClx("navbar-links") 
        }else{
            console.log("else blocks")
            setClx("navbar-links active")
            
        }
        setDropDown(!dropDown)
       
    }
  
            
    return (
        <header className="header">

            <a href="#" className="logo"> <i className="fas fa-heartbeat"></i> Patient Hub </a>

            <nav className="navbar">
                <div className={clx}>
                <ul>
                <li><a href="#home">home</a></li>
                <li><a href="#services">services</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#doctors">doctors</a></li>
                
                <li><a className="cta" href="#">
                <button>Become a Patient</button>
            </a></li>
            </ul>
            </div>


            <a href="#" onClick={handleToggleClick} className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>

            </nav>

           

            
        </header>
    );
}

