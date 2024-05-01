import { NavLink } from "react-router-dom";
import './Notfound.scss'

export default function Error() {
    return (
        <>
            <div className="error_Container">
                <p className="error_Container__Number">404</p>
                <p className="error_Container__Text">
                    Oups! La page que vous demandez n'existe pas.
                </p>
                <NavLink to="/" className="errorContainer__Link">
                    Retourner sur la page d'accueil
                </NavLink>
            </div>
        </>
    );
}