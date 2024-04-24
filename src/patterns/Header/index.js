import Logo from "../Logo";

function Header() {
    return (
        <header className="header">
            <div className="header__content-wrapper">
                <Logo />
                <div>hamburger menu</div>
            </div>
        </header>
    );
}

export default Header;
