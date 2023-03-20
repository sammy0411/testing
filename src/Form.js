// import React, { Component, useState } from "react";
import React, { useState } from "react";
import "./App.css";
// import Navbar from "./Navbar.js";
import Forms from "./Forms.js";
function Form() 
{
  const [data, setData] = useState([]);
  const elements = ["Yield", "Cost", "Soil Health"];

  const handleClick = (e) => {
    console.log(e.target.id);
    const newData = elements.filter((item, index) => {
      return e.target.id - 1 !== index;
    });
    setData(newData);
    console.log(newData);
  };
  return (
    <div>
      <form>
        <label> Yield</label>
        <input type="radio" name="Form" id="1" onClick={handleClick} />
        <label> Cost</label>
        <input type="radio" name="Form" id="2" onClick={handleClick} />
        <label> Soil Health</label>
        <input type="radio" name="Form" id="3" onClick={handleClick} />
      </form>
        
      <Forms {...data}> </Forms>
    </div>
  );
}
// Updates : Background image to be added
// States must be 0,0 : 0,1 : 1,0
// Input types is being done checkbox so that other input gets disappeared when clicking on the current input and others coming down
// Advanced : useRef hook for storing
// https://home.agromonitoring.com/auth/sign-up/
export default Form;

