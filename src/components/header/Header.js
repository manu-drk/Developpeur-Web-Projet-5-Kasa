import logo from "../../assets/LOGO.png";
// import Nav from "../nav/Nav";
import { Link } from "react-router-dom";
import './Header.css'


export default function Header() {
    return (
        <header className="header">
            <figure className="header__fig">
                <img className="header-logo" src={logo} alt="logo de l'agence kasa" />
            </figure>
            {/* <Nav className="nav-header" /> */}
            <nav className="nav-header">
			<Link to="/" className="nav-bar_link-home">
				Accueil
			</Link>
			<Link to="/apropos" className="nav-bar_link-apropos">
				A Propos
			</Link>
		</nav>
        </header>
    );
}