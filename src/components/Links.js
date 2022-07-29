import React from "react";

function Links(props) {
  return (
    <div id="about">
      <h3>Links</h3>
      <a href="https://github.com/liza">{props.links.github}</a>
      <a href="https://www.linkedin.com/in/liza/">{props.links.linkedin}</a>
    </div>
  );
}

export default Links;
