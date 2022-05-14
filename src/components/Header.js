import React from "react";

export default function Header() {
  return (
    <header className="header">
      <img src={require('../images/Troll-Face.png')} alt='troll-face'/>
      <h2>Meme Generator</h2>
      <p>Create Your Own Meme</p>
    </header>
  )
}