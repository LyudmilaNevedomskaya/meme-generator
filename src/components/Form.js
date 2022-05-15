import React from "react";
import images from "../memesData";

export default function Form() {

  const [memeImg, setMemeImg] = React.useState('');

  function getImage(e) {
    e.preventDefault();
    const memesArr = images.data.memes;
    const randomIndex = Math.floor(Math.random() * images.data.memes.length);
    const url = memesArr[randomIndex].url;
    //console.log('index:', randomIndex, 'url:', url);

    setMemeImg(url);
  }

  return (
    <main>
      <form className="form">
        <input className="form--input" type='text' placeholder="Enter key word" />
        <input className="form--input" type='text' placeholder="Enter key phrase" />
        <input onClick={getImage} className="form--button" type='submit' value='Get a new meme image  🖼' />
      </form>
      <img className="meme-img" src={memeImg} alt="Meme"/>
    </main>
  )
}