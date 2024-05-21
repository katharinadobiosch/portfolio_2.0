import SectionFrame from "../SectionFrame";

function Contact({ id }) {
    return (
        <div className="contact" id={id}>
            <SectionFrame section="drop-me-a-line">
                {" "}
                <p>
                    Have a project in mind or just want to say hello? Drop me a
                    line! I'm always open to new opportunities and
                    collaborations.
                </p>
                <p>
                    You can reach me via{" "}
                    <a
                        href="mailto:hello@katharinadobiosch.com"
                        className="contact__link"
                    >
                        email
                    </a>{" "}
                    or connect with me on{" "}
                    <a
                        href="https://www.linkedin.com/in/katharinadobiosch/"
                        target="_blank"
                        rel="noreferrer"
                        className="contact__link"
                    >
                        LinkedIn
                    </a>{" "}
                    or on{" "}
                    <a
                        href="https://github.com/katharinadobiosch"
                        target="_blank"
                        rel="noreferrer"
                        className="contact__link"
                    >
                        GitHub
                    </a>
                    .
                </p>
            </SectionFrame>
        </div>
    );
}

export default Contact;
