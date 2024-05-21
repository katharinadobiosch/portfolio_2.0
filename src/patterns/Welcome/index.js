import SectionFrame from "../SectionFrame";

function Welcome({ id }) {
    return (
        <div className="welcome" id={id}>
            <SectionFrame section="welcome">
                <p>
                    Hi, nice to see you. I'm
                    <span className="welcome__keywords"> Katharina</span>, a
                    <span className="welcome__keywords">
                        {" "}
                        Frontend Developer
                    </span>{" "}
                    with a design background based in Berlin. I specialize in
                    <span className="welcome__keywords"> JavaScript</span>,
                    <span className="welcome__keywords"> React</span> and
                    <span className="welcome__keywords"> CSS</span>. My
                    strengths lie in creating user-friendly interfaces and
                    bringing design concepts to life. I'm passionate about
                    exploring new
                    <span className="welcome__keywords"> technologies</span> and
                    continuously improving my
                    <span className="welcome__keywords">
                        {" "}
                        responsive design
                    </span>{" "}
                    skills. I especially enjoy working in
                    <span className="welcome__keywords"> e-commerce</span> and
                    building
                    <span className="welcome__keywords">
                        {" "}
                        user-friendly
                    </span>{" "}
                    and
                    <span className="welcome__keywords">
                        {" "}
                        reusable components
                    </span>
                    . Let's create something amazing together.
                </p>
            </SectionFrame>
        </div>
    );
}

export default Welcome;
