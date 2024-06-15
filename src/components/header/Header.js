import logo from "../../assets/LOGO.png";
import { NavLink } from "react-router-dom";
import './Header.scss';

export default function Header() {
    return (
        <header className="header">
            <figure className="header__fig">
                <img className="header-logo" src={logo} alt="logo de l'agence kasa" />
            </figure>
            <nav className="nav-header">
                <NavLink 
                    to="/" 
                    end 
                    className={({ isActive }) => isActive ? "nav-bar_link-home active" : "nav-bar_link-home"}
                >
                    Accueil
                </NavLink>
                <NavLink 
                    to="/apropos" 
                    className={({ isActive }) => isActive ? "nav-bar_link-apropos active" : "nav-bar_link-apropos"}
                >
                    A Propos
                </NavLink>
            </nav>
        </header>
    );
}
