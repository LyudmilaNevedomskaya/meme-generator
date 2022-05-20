import React from "react";
//import images from "../memesData";

export default function Form() {

  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
    .then(res => res.json())
    .then(data => {
      setAllMemes(data.data.memes);
    })
  }, [])


  function getImage(e) {
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomIndex].url;

    setMeme(prev => ({ ...prev, randomImage: url }));
  }


  function handleChange(event) {
    const {name, value} = event.target;

    setMeme(prev => ({
      ...prev,
      [name] : value
    }))
  }

  return (
    <main>
      <form className="form">
        <input
          className="form--input"
          type='text'
          placeholder="Enter key word"
          name='topText'
          value={meme.topText}
          onChange={handleChange} />
        <input
          className="form--input"
          type='text'
          placeholder="Enter key phrase"
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange} />
        <input
          onClick={getImage}
          className="form--button" type='submit'
          value='Get a new meme image  🖼' />
      </form>

      <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt="Meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>

      </div>
    </main>
  )
}