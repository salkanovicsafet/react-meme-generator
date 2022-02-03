import React from "react";
import memesData from "../data/memesData.js";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");
  function getMeme() {
    const memesArray = memesData.data.memes;
    let rand = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[rand].url;
    setMemeImage(url);
  }
  return (
    <div className="meme">
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
        <button onClick={getMeme} className="form__btn">
          Get a new meme image 🖼️
        </button>
      </div>
      {memeImage != "" && (
        <img src={memeImage} alt="Meme" className="meme__img" />
      )}
    </div>
  );
}
