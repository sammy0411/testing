// import React, { Component } from "react";
import React from "react";
// import './App.css';

function Forms() {
  return (
    <div>
      <form>
        <input type="text" />
        <label> How are you?</label>
        <input type="text" />
        <label> How are you?</label>
        <input
          type="submit"
          onClick={(e) => {
            e.preventDefault();
          }}
        />
      </form>
    </div>
  );
}

export default Forms;
