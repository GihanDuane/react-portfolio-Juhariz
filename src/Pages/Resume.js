import Myimage from "../assets/Profilepicture.jpg"

export default function Resume() {
    return (
        <div className="container-sm">
            <div className="about-photo">
            <img width={160} height={160} src={Myimage} alt="Juhariz Pandog/Kheil Artimist"/>
            </div>
        </div>
    )
}