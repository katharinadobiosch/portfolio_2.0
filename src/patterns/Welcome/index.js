import SectionFrame from "../SectionFrame";

function Welcome() {
    return (
        <div className="">
            <SectionFrame section="welcome">
                <p>
                    Hi, nice to see you. I'm{" "}
                    <span className="welcome__keywords">Katharina</span>, a{" "}
                    <span className="welcome__keywords">
                        Frontend Developer
                    </span>{" "}
                    with a design background based in Berlin. I'm always eager
                    to{" "}
                    <span className="welcome__keywords">learn new things</span>{" "}
                    and
                    <span className="welcome__keywords">
                        {" "}
                        improve my skills
                    </span>
                    . Let's create something amazing together.
                </p>
            </SectionFrame>
        </div>
    );
}

export default Welcome;
