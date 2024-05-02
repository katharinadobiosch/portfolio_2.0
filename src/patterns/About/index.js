import SectionFrame from "../SectionFrame";

function About() {

    const aboutText= "Cupcake ipsum dolor sit amet dessert carrot cake jelly-o candy. Bear claw liquorice cookie oat cake brownie fruitcake fruitcake lollipop chocolate bar. Gingerbread chocolate cake croissant lemon drops danish chupa chups candy canes apple pie bonbon. Jelly beans I love liquorice I love jelly beans chupa chups biscuit jelly-o. Chupa chups chupa chups jelly beans sweet roll candy canes halvah cheesecake jelly beans croissant. Brownie jelly danish I love I love wafer."
    
    return (
        <div className="">
            <SectionFrame text={aboutText} section="about" />
        </div>
    );
}

export default About;
export { default as aboutVariants } from "./variants.js";
