import React from "react";
import images from "../memesData";

export default function Form() {

  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  });

  const [allMemeImages, setAllMemeImages] = React.useState(images);

  function getImage(e) {
    e.preventDefault();
    const memesArray = allMemeImages.data.memes;
    const randomIndex = Math.floor(Math.random() * images.data.memes.length);
    const url = memesArray[randomIndex].url;
    //console.log('index:', allMemeImages);

    setMeme(prev => ({...prev, randomImage: url}));
  }

  return (
    <main>
      <form className="form">
        <input className="form--input" type='text' placeholder="Enter key word" />
        <input className="form--input" type='text' placeholder="Enter key phrase" />
        <input onClick={getImage} className="form--button" type='submit' value='Get a new meme image  🖼' />
      </form>
      <img className="meme-img" src={meme.randomImage} alt="Meme"/>
    </main>
  )
}