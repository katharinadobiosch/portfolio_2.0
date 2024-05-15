import SectionFrame from "../SectionFrame";
import "/";

import beurer from "../../assets/WorkExperience/beurer-logo.svg";
import more from "../../assets/WorkExperience/more-logo.avif";
import oace from "../../assets/WorkExperience/oace-logo.png";
import taschen from "../../assets/WorkExperience/taschen-logo.svg";
import umg from "../../assets/WorkExperience/umg-logo.svg.png";

function WorkExperience({ id }) {
    return (
        <div className="work-experience" id={id}>
            <SectionFrame section="work-experience">
                <p className="work-experience__title ">
                    Projects I worked on during my time at{" "}
                    <a
                        href="https://www.marmalade.de/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-experience__link"
                    >
                        Marmalade GmbH
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://www.datora.de/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-experience__link"
                    >
                        Datora WebSystems
                    </a>
                    .
                </p>
                <div className="work-experience__img-wrapper">
                    <a
                        href="https://www.beurer.com/fr/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={beurer}
                            alt="Beurer Logo"
                            className="white-logo"
                        />
                    </a>
                    <a
                        href="https://www.taschen.com/de/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={taschen}
                            alt="Taschen Verlag Logo"
                            className="white-logo"
                        />
                    </a>
                    <a
                        href="https://www.umusic.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={umg}
                            alt="Universal Music Logo"
                            className="white-logo"
                        />
                    </a>

                    <a
                        href="https://morenutrition.de/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={more}
                            alt="More Nutrition Logo"
                            className="white-logo"
                        />
                    </a>
                    <a
                        href="https://oace.de/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={oace}
                            alt="Oace Logo"
                            className="white-logo"
                        />
                    </a>
                </div>
            </SectionFrame>
        </div>
    );
}

export default WorkExperience;
