import { NavLink } from "react-router-dom";
import './Notfound.scss'

export default function Error() {
    return (
        <>
            <div className="error_Container">
                <p className="error_Container__Number">404</p>
                {/* <p className="error_Container__Text">
                    Oups! La page que vous demandez n'existe pas.
                    Oups! La page que <span className="mobile-only"><br /></span> vous demandez n'existe pas.
                </p> */}
                <p className="error_Container__Text mobile-text">
  Oups! La page que <br /> vous demandez n'existe pas.
</p>
<p className="error_Container__Text desktop-text">
  Oups! La page que vous demandez n'existe pas.
</p>

                <NavLink to="/" className="errorContainer__Link">
                    Retourner sur la page d'accueil
                </NavLink>
            </div>
        </>
    );
}