import Myimage from "../assets/Profilepicture.jpg"

export default function Resume() {
    return (
        <div className="container-sm">
            <div className="about-photo">
                <img width={160} height={160} src={Myimage} alt="Juhariz Pandog/Kheil Artimist"/>
            </div>
            <div>Juhariz Pandog/Kheil Artimist</div>
            <div>Freelancer Illustrator/Character Concept designer</div>
            <div><span></span>South Cotabato, Philippines</div>
            <div><a href="mailto:malcolnkheil@gmail.com">malcolnkheil@gmail.com</a></div>
        </div>
    )
}