import SectionFrame from "../SectionFrame";
import "/";

import beurer from "../../assets/references/beurer-logo.svg";
import more from "../../assets/references/more-logo.avif";
import oace from "../../assets/references/oace-logo.png";
import taschen from "../../assets/references/taschen-logo.svg";

function References(props) {
    return (
        <div className="references">
            <SectionFrame section="work-experience">
                <p className="references__title ">
                    Projects I worked on during my time at Marmalade GmbH and
                    Datora WebSystems.
                </p>
                <div className="references__img-wrapper">
                    <img
                        src={beurer}
                        alt="Beurer Logo"
                        className="white-logo"
                    />
                    <img
                        src={taschen}
                        alt="Taschen Verlag Logo"
                        className="white-logo"
                    />
                    <img
                        src=""
                        alt="Universal Music Logo"
                        className="white-logo"
                    />
                    <img
                        src={more}
                        alt="More Nutrition Logo"
                        className="white-logo"
                    />
                    <img src={oace} alt="Oace Logo" className="white-logo" />
                </div>
            </SectionFrame>
        </div>
    );
}

export default References;
