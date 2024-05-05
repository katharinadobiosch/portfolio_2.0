import SectionFrame from "../SectionFrame";
import "/";

import beurer from "../../assets/references/beurer-logo.svg";
import more from "../../assets/references/more-logo.avif";
import oace from "../../assets/references/oace-logo.png";
import taschen from "../../assets/references/taschen-logo.svg";
import umg from "../../assets/references/umg-logo.svg.png";

function References(props) {
    return (
        <div className="references">
            <SectionFrame section="work-experience">
                <p className="references__title ">
                    Projects I worked on during my time at Marmalade GmbH and
                    Datora WebSystems.
                </p>
                <div className="references__img-wrapper">
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

export default References;
