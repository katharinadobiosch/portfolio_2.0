import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
    const { projectName } = useParams();

    let projectUrl = "";
    if (projectName === "portfolio") {
        projectUrl = "URL_DES_PORTFOLIOS";
    } else if (projectName === "burger-creator") {
        projectUrl = "URL_DES_BURGER_CREATORS";
    } else if (projectName === "adventskalender") {
        projectUrl = "URL_DES_ADVENTSKALENDERS";
    }

    return (
        <div className="project-detail">
            <h2>{projectName}</h2>
            <iframe
                src={projectUrl}
                title={projectName}
                width="100%"
                height="500px"
            />
        </div>
    );
};

export default ProjectDetail;
