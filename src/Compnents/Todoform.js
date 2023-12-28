import React, { useState } from "react";
import shortid from 'shortid';

function Todoform(props) {
    const [text,setText] = useState("")
    const handleChange = (e) => {
      // Check if the input value is not empty after trimming
      if (e.target.value.trim() !== "") {
        setText(e.target.value);
      }
    };
     const handleSubmit = (e)=>{
        e.preventDefault();
        if (text.trim() !== "") {

        props.onSubmit({
            id : shortid.generate(),
            text : text,
            complete : false
        });
       setText("")
      }
     }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        onChange={handleChange}
        value={text}
      />
      <button className="btn" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
}

export default Todoform;
