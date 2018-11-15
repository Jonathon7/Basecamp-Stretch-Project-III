import React from "react";

function Content(props) {
  return (
    <div
      style={{
        display: "column",
        justifyContent: "start",
        maxWidth: "45%",
        paddingLeft: "3%"
      }}
    >
      <h1>{props.title}</h1>
      <h4 style={{ fontWeight: "lighter" }}>{props.text}</h4>
    </div>
  );
}

export default Content;
