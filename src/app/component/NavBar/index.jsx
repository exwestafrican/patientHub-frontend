import "./heading.scss";


export default function NavBar() {
    return (
        <header className="header">

            <a href="#" className="logo"> <i className="fas fa-heartbeat"></i> Patient Hub </a>

            <nav className="navbar">
                <a href="#home">home</a>
                <a href="#services">services</a>
                <a href="#about">about</a>
                <a href="#doctors">doctors</a>
            </nav>

            <a className="cta" href="#">
                <button>Become a Patient</button>
            </a>

        </header>
    );
}

