import trollFace from "../assets/images/Troll Face.svg";

export default function Header() {
  return (
    <div className="header">
      <img src={trollFace} alt="Troll Face" className="header__logo" />
      <div className="header__title">Meme Generator</div>
      <div className="header__project-name">React Course - Project 3</div>
    </div>
  );
}
