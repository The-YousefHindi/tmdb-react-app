import "./Header.css";
import NavBar from "../NavBar/NavBar";
import Title from "../Title/Title";

export default function Header() {
    return (
        <div className="header">
        <NavBar />
        <Title />
        </div>
    )
}