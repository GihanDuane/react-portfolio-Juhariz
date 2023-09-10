import Myimage from "../assets/Profilepicture.jpg"

const AboutIntro = () => {
    return (
        <div className="about-intro">
            <div className="container-sm">
                <div className="about-photo">
                    <img width={160} height={160} src={Myimage} alt="Juhariz Pandog/Kheil Artimist"/>
                </div>
                <div className="about-name site-title title-font">Juhariz Pandog/Kheil Artimist</div>
                <div className="about-position">Freelancer Illustrator/Character Concept designer</div>
                <div className="about-location"><span></span>South Cotabato, Philippines</div>
                <div className="about-email"><a href="mailto:malcolnkheil@gmail.com">malcolnkheil@gmail.com</a></div>
            </div>
        </div>
    );
};

export default AboutIntro;