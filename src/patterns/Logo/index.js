function Logo({ scrollToSection }) {
    const handleClick = (id) => {
        scrollToSection(id);
    };
    return (
        <div className="logo">
            <div
                className="logo__content-wrapper"
                onClick={() => handleClick("home")}
            >
                <p>Katharina</p>
                <p>Dobiosch</p>
            </div>
        </div>
    );
}

export default Logo;
