import React from "react";

export default function Form() {
  return (
    <main>
      <form className="form">
        <input className="form--input" type='text' placeholder="Enter key word" />
        <input className="form--input" type='text' placeholder="Enter key phrase" />
        <input className="form--button" type='submit' value='Get a new meme image  🖼' />
      </form>
    </main>
  )
}