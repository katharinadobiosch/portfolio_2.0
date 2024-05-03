import SectionFrame from "../SectionFrame";

function Contact() {
    return (
        <div className="">
            <SectionFrame section="drop-me-a-line">
                {" "}
                <p>
                    Have a project in mind or just want to say hello? Drop me a
                    line! I'm always open to new opportunities and
                    collaborations.
                </p>
                <p>
                    You can reach me via email at{" "}
                    <a href="mailto:katharinadobiosch@gmail.com">
                        katharinadobiosch@gmail.com
                    </a>
                    , or connect with me on LinkedIn and Instagram.
                </p>
            </SectionFrame>
        </div>
    );
}

export default Contact;
