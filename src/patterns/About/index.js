import SectionFrame from "../SectionFrame";

function About({ id }) {
    return (
        <div className="about" id={id}>
            <SectionFrame section="about-me">
                <p>
                    As a passionate{" "}
                    <span className="about__keywords">Frontend Developer</span>{" "}
                    with expertise in{" "}
                    <span className="about__keywords">React</span>,{" "}
                    <span className="about__keywords">Next.js</span>, and{" "}
                    <span className="about__keywords">JavaScript</span>, I enjoy
                    creating visually appealing and user-friendly websites for{" "}
                    <span className="about__keywords">online stores</span>. My
                    journey into web development has been driven by my love for
                    intuitive user experiences and eye-catching designs.
                </p>
                <br />
                <strong>Key Achievements</strong>
                <p>
                    <ul>
                        <li>
                            <span className="about__keywords">
                                Shopify Advent Calendar App
                            </span>
                            : Independently created and set to release on the
                            <span className="about__keywords">
                                Shopify App Store
                            </span>{" "}
                            this year. Enjoyed working on responsive design,
                            animations, and API setup.
                        </li>
                        <li>
                            <span className="about__keywords">
                                E-commerce Projects
                            </span>{" "}
                            : Contributed to various projects within{" "}
                            <span className="about__keywords">Scrum teams</span>
                            . , focusing on enhancing user experience and
                            implementing efficient solutions.
                        </li>
                    </ul>
                </p>
                <br />
                <strong>Professional Background</strong>
                <p>
                    <ul>
                        <li>
                            <span className="about__keywords">
                                Visual Merchandiser
                            </span>{" "}
                            and{" "}
                            <span className="about__keywords">Store Owner</span>
                            : Built strong relationships with{" "}
                            <span className="about__keywords">brands</span> and{" "}
                            <span className="about__keywords">suppliers</span> ,
                            ensuring excellent{" "}
                            <span className="about__keywords">
                                customer experiences
                            </span>
                            . This role honed my{" "}
                            <span className="about__keywords">
                                technical skills
                            </span>{" "}
                            and management abilities, allowing me to approach
                            frontend development with a customer-centric
                            mindset.
                        </li>
                    </ul>
                </p>{" "}
                <br />
                <strong>Education and Certifications</strong>
                <p>
                    <ul>
                        {" "}
                        <li>
                            <span className="about__keywords">
                                {" "}
                                Diploma in Design
                            </span>
                            :{" "}
                            <span className="about__keywords">
                                Fachhochschule Niederrhein
                            </span>
                            , focusing on{" "}
                            <span className="about__keywords">
                                communication design
                            </span>
                            ,{" "}
                            <span className="about__keywords">
                                media creation
                            </span>
                            , and{" "}
                            <span className="about__keywords">
                                visual storytelling
                            </span>
                            .
                        </li>
                        <li>
                            <span className="about__keywords">
                                Certifications{" "}
                            </span>
                            :{" "}
                            <span className="about__keywords">
                                Full Stack Web Development
                            </span>{" "}
                            and{" "}
                            <span className="about__keywords">
                                Retail Management
                            </span>
                            .
                        </li>
                    </ul>
                </p>{" "}
                <br />
                <strong>Technical Skills and Expertise</strong>
                <p>
                    <ul>
                        <li>
                            Frontend Development: Specialize in creating
                            responsive designs, implementing animations, and
                            setting up APIs.
                        </li>
                        <li>
                            Languages: Fluent in{" "}
                            <span className="about__keywords">German</span>,
                            proficient in{" "}
                            <span className="about__keywords">English</span>,
                            and with a solid understanding of{" "}
                            <span className="about__keywords">Polish</span>.
                        </li>
                    </ul>
                </p>{" "}
                <br />
                <strong>Personal Approach</strong>
                <p>
                    My passion lies squarely in frontend development, where I
                    thrive on bringing{" "}
                    <span className="about__keywords">digital visions</span> to
                    life and enhancing user experiences. Comfortable in{" "}
                    <span className="about__keywords">
                        multicultural environments
                    </span>
                    , I enjoy working with diverse teams to create innovative
                    solutions where{" "}
                    <span className="about__keywords">creativity</span> knows no
                    bounds, and every line of code tells a story of{" "}
                    <span className="about__keywords">progress</span> and{" "}
                    <span className="about__keywords">possibility</span>.
                </p>
            </SectionFrame>
        </div>
    );
}

export default About;
