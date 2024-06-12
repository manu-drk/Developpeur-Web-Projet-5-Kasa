import logo from "../../assets/LOGO.png";
// import Nav from "../nav/Nav";
import { NavLink } from "react-router-dom";
import './Header.scss'


export default function Header() {
    return (
        <header className="header">
            <figure className="header__fig">
                <img className="header-logo" src={logo} alt="logo de l'agence kasa" />
            </figure>
            {/* <Nav className="nav-header" /> */}
            <nav className="nav-header">
			{/* <Link to="/" className="nav-bar_link-home">
				Accueil
			</Link>
			<Link to="/apropos" className="nav-bar_link-apropos">
				A Propos
			</Link> */}
            <NavLink to="/" exact className="nav-bar_link-home" activeClassName="active">
                    Accueil
                </NavLink>
                <NavLink to="/apropos" className="nav-bar_link-apropos" activeClassName="active">
                    A Propos
                </NavLink>
		</nav>
        </header>
    );
}