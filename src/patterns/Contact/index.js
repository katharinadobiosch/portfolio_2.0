import SectionFrame from "../SectionFrame";

function Contact() {
    return (
        <div className="contact">
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
                        href="mailto:katharinadobiosch@gmail.com"
                        className="contact__link"
                    >
                        email{" "}
                    </a>
                    or connect with me on{" "}
                    <a
                        href="https://www.linkedin.com/in/katharinadobiosch/"
                        className="contact__link"
                    >
                        LinkedIn
                    </a>
                    .
                </p>
            </SectionFrame>
        </div>
    );
}

export default Contact;
