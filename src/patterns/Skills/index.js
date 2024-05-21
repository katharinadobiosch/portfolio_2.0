import SectionFrame from "../SectionFrame";

const skills = [
    {
        name: "HTML5",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
        name: "CSS3",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    {
        name: "JavaScript",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
        name: "TypeScript",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    },
    {
        name: "React.js",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
        name: "Next.js",
        logo: "https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png",
    },
    // {
    //     name: "Agile Web Development",
    //     logo: "https://upload.wikimedia.org/wikipedia/commons/9/94/Scrum-Logo.svg",
    // },
    {
        name: "Shopify (including Liquid)",
        logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
    },
    // {
    //     name: "Responsive Design",
    //     logo: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Responsive_Web_Design.png",
    // },
    {
        name: "Git (GitHub and GitLab)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png",
    },
    {
        name: "Scrum",
        logo: "https://seeklogo.com/images/S/scrum-logo-B057CBD9B8-seeklogo.com.png",
    },
    {
        name: "Figma",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    },
    {
        name: "Adobe Creative Cloud",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg/2101px-Adobe_Creative_Cloud_rainbow_icon.svg.png",
    },
    {
        name: "Liquid",
        logo: "https://assets-global.website-files.com/64be309a0c8ae7454454fcef/653932043d90a3fa696fd68a_liquid-logo-text.png",
    },
];

function Skills({ id }) {
    return (
        <div className="skills" id={id}>
            <SectionFrame section="skills">
                <ul className="skills__list">
                    {skills.map((skill, index) => (
                        <li key={index}>
                            <img src={skill.logo} alt={skill.name} />
                        </li>
                    ))}
                </ul>
            </SectionFrame>
        </div>
    );
}

export default Skills;
