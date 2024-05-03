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
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    },
    // {
    //     name: "Agile Web Development",
    //     logo: "https://upload.wikimedia.org/wikipedia/commons/9/94/Scrum-Logo.svg",
    // },
    {
        name: "Shopify (including Liquid)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Shopify_logo.svg/800px-Shopify_logo.svg.png",
    },
    // {
    //     name: "Responsive Design",
    //     logo: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Responsive_Web_Design.png",
    // },
    {
        name: "Git (GitHub and GitLab)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
    },
    // {
    //     name: "Scrum",
    //     logo: "https://upload.wikimedia.org/wikipedia/commons/9/94/Scrum-Logo.svg",
    // },
    {
        name: "Figma",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    },
    {
        name: "Adobe Creative Cloud",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Adobe_Creative_Cloud_logo.svg",
    },
    // {
    //     name: "Liquid",
    //     logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/Shopify_logo.png",
    // },
];

function Skills() {
    return (
        <div className="skills">
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
