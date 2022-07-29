import React from "react";
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{true ? "Hello" : "Goodbye"}{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links links={props.links} />
    </div>
  );
}

export default About;
