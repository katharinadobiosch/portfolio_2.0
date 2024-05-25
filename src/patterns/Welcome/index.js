import SectionFrame from "../SectionFrame";

function Welcome({ id }) {
    return (
        <div className="welcome" id={id}>
            <SectionFrame section="welcome">
                <p>
                    Hi there, nice to meet you. I'm{" "}
                    <span class="welcome__keywords">Katharina</span>, a{" "}
                    <span class="welcome__keywords">Frontend Developer</span>{" "}
                    based in Berlin. I specialize in{" "}
                    <span class="welcome__keywords">JavaScript</span>,{" "}
                    <span class="welcome__keywords">React</span> and{" "}
                    <span class="welcome__keywords">CSS</span>. Let's create
                    something amazing together.
                </p>
            </SectionFrame>
        </div>
    );
}

export default Welcome;
