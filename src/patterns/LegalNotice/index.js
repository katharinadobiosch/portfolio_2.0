import SectionFrame from "../SectionFrame";

const LegalNotice = () => {
    return (
        <SectionFrame section="legal-notice">
            <div className="legal-notice">
                <p>Responsible for the content of the internet pages:</p>
                <p>Katharina Dobiosch | Haasestraße 14 | 10245 Berlin</p>
                <p>
                    Mail: hello@katharinadobiosch.com <br /> Phone: +49 178 29
                    59 833{" "}
                </p>
                <p>
                    I assume no liability for the content of external links.
                    This website does not use tracking tools and does not set
                    cookies.
                </p>
            </div>
        </SectionFrame>
    );
};

export default LegalNotice;
