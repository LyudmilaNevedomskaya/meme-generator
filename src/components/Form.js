import React from "react";

export default function Form() {
  return (
    <form className="form-container">
      <div className="form-container_inputs">
        <input type='text' placeholder="Enter key word" />
        <input type='text' placeholder="Enter key phrase" />
      </div>
      <input className="form-container_btn" type='submit' />
    </form>
  )
}