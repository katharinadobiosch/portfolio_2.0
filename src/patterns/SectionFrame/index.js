function SectionFrame(props) {
    const { text, section } = props;
    return (
        <div className="section-frame">
            <div className="section-frame__content-wrapper ">
                <span className="section-frame__pink">&lt;div </span>
                <span className="section-frame__yellow">id</span>=
                <span className="section-frame__green">"{section}"</span>
                <span className="section-frame__pink">&gt;</span>
                <p>{text}</p>
                <span className="section-frame__pink">&lt;/div&gt;</span>
            </div>
        </div>
    );
}

export default SectionFrame;
