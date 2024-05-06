import { Link } from "react-router-dom";
import * as paths from "../../config/paths";

function Logo() {
    return (
        <div className="logo">
            <div className="logo__content-wrapper">
                <Link to={paths.HOME}>
                    <p>Katharina</p>
                    <p>Dobiosch</p>
                </Link>
            </div>
        </div>
    );
}

export default Logo;
