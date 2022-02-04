import React from "react";
import memesData from "../data/memesData.js";

export default function Meme() {
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomimage: "",
  });

  function getMeme() {
    const memesArray = allMemeImages.data.memes;
    let rand = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[rand].url;
    setMeme((prevState) => {
      return { ...prevState, randomimage: url };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  return (
    <div className="meme">
      <div className="form">
        <div className="form__inputs">
          <input
            type="text"
            className="form__inputs__field"
            placeholder="Top text"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
          <input
            type="text"
            className="form__inputs__field"
            placeholder="Bottom text"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </div>
        <button onClick={getMeme} className="form__btn">
          Get a new meme image 🖼️
        </button>
      </div>
      <div className="meme__wrapper">
        <h2 className="meme__text top">{meme.topText}</h2>
        {meme.randomimage != "" && (
          <img src={meme.randomimage} alt="Meme" className="meme__img" />
        )}
        <h2 className="meme__text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
