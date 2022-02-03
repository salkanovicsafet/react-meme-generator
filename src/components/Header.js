import trollFace from "../assets/images/Troll Face.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={trollFace} alt="Troll Face" className="header__logo__img" />
        <div className="header__logo__title">Meme Generator</div>
      </div>
      <div className="header__project-name">React Course - Project 3</div>
    </div>
  );
}
