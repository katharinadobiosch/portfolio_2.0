import HamburgerMenu from "../HamburgerMenu";
import Logo from "../Logo";

function Header() {
    return (
        <header className="header">
            <div className="header__content-wrapper">
                <Logo />

                <HamburgerMenu />
            </div>
        </header>
    );
}

export default Header;
