import SectionFrame from "../SectionFrame";

function About({ id }) {
    console.log("About component rendered with ID:", id);

    return (
        <div className="" id={id}>
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
                <p>
                    One of my recent accomplishments includes independently
                    creating a{" "}
                    <span className="about__keywords">
                        Shopify Advent Calendar App
                    </span>
                    , which will be released on the{" "}
                    <span className="about__keywords">Shopify App Store</span>{" "}
                    this year. I've also contributed to various{" "}
                    <span className="about__keywords">E-commerce projects</span>{" "}
                    within agile{" "}
                    <span className="about__keywords">Scrum teams</span>.
                </p>
                <p>
                    Before transitioning to tech, I worked as a{" "}
                    <span className="about__keywords">Visual Merchandiser</span>{" "}
                    and <span className="about__keywords">Store Owner</span>,
                    where I built strong relationships with{" "}
                    <span className="about__keywords">brands</span> and{" "}
                    <span className="about__keywords">suppliers</span> while
                    ensuring excellent{" "}
                    <span className="about__keywords">
                        customer experiences
                    </span>
                    . My background in visual merchandising and owning a kids
                    concept store has equipped me with both{" "}
                    <span className="about__keywords">technical skills</span>{" "}
                    and strong management abilities. This unique blend enables
                    me to approach Frontend development challenges with a
                    customer-centric mindset, ensuring effective solutions that
                    prioritize user experience.
                </p>
                <p>
                    In addition to my professional experiences, I hold a{" "}
                    <span className="about__keywords">diploma</span> in{" "}
                    <span className="about__keywords">Design</span> from{" "}
                    <span className="about__keywords">
                        Fachhochschule Niederrhein
                    </span>
                    , with a focus on{" "}
                    <span className="about__keywords">
                        communication design
                    </span>
                    , <span className="about__keywords">media creation</span>,
                    and{" "}
                    <span className="about__keywords">visual storytelling</span>
                    . I'm also certified in{" "}
                    <span className="about__keywords">
                        Full Stack Web Development
                    </span>{" "}
                    and{" "}
                    <span className="about__keywords">Retail Management</span>.
                </p>
                <p>
                    My passion lies squarely in frontend development, where I
                    thrive on bringing{" "}
                    <span className="about__keywords">digital visions</span> to
                    life and enhancing user experiences. Fluent in{" "}
                    <span className="about__keywords">German</span>, proficient
                    in <span className="about__keywords">English</span>, and
                    with a solid understanding of{" "}
                    <span className="about__keywords">Polish</span>, I am
                    comfortable in{" "}
                    <span className="about__keywords">
                        multicultural environments
                    </span>{" "}
                    and enjoy working with diverse teams.
                </p>
                <p>
                    Let's work together to create innovative solutions where{" "}
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
