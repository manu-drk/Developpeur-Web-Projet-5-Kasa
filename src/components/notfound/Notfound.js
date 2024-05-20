import { NavLink } from "react-router-dom";
import './Notfound.scss'

export default function Error() {
    return (
        <>
            <div className="error_Container">
                <p className="error_Container__Number">404</p>
                <div className="error_Container__text_content">
                    <p className="error_Container__Text1">
                    Oups! La page que                     
                </p>
                <p className="error_Container__Text2">                    
                    vous demandez n'existe pas.
                </p>
                </div>
                {/* <p className="error_Container__Text mobile-text">
  Oups! La page que <br /> vous demandez n'existe pas.
</p>
<p className="error_Container__Text desktop-text">
  Oups! La page que vous demandez n'existe pas.
</p> */}

                <NavLink to="/" className="error_Container__Link">
                    Retourner sur la page d'accueil
                </NavLink>
            </div>
        </>
    );
}