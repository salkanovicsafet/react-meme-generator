export default function Meme() {
  return (
    <div className="form">
      <div className="form__inputs">
        <input
          type="text"
          className="form__inputs__field"
          placeholder="Top text"
        />
        <input
          type="text"
          className="form__inputs__field"
          placeholder="Bottom text"
        />
      </div>
      <button className="form__btn">Get a new meme image 🖼️</button>
    </div>
  );
}
