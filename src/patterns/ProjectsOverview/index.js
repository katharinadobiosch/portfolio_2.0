import React from "react";
import { Link } from "react-router-dom";
import SectionFrame from "../SectionFrame";
const projects = [
    { name: "Portfolio", url: "/portfolio" },
    { name: "Burger Creator", url: "/burger-creator" },
    { name: "Adventskalender", url: "/adventskalender" },
];

const ProjectsOverview = () => {
    return (
        <SectionFrame section="my projects">
            <div className="projects-overview">
                {projects.map((project) => (
                    <div>{project.name}</div>
                ))}
            </div>
        </SectionFrame>
    );
};

export default ProjectsOverview;
