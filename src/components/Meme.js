export default function Meme() {
  return (
    <div className="form">
      <div className="form__inputs">
        <input type="text" className="form__inputs__top-text" />
        <input type="text" className="form__inputs__bottom-text" />
      </div>
      <button className="form__btn">Get a new meme image 🖼</button>
    </div>
  );
}
