import HamburgerMenu from "../HamburgerMenu";
import Logo from "../Logo";

function Header({ scrollToSection }) {
    return (
        <header className="header">
            <div className="header__content-wrapper">
                <Logo scrollToSection={scrollToSection} />

                <HamburgerMenu scrollToSection={scrollToSection} />
            </div>
        </header>
    );
}

export default Header;
