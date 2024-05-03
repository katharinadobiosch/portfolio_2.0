import { Link } from "react-router-dom";
import * as paths from "../../config/paths";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content-wrapper">
                <Link to={paths.LEGAL_NOTICE} className="footer__link">
                    Legal Notice
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
