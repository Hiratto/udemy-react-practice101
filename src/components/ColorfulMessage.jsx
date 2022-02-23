import React from "react";

const ColorfulMessage = (props) => {
  const contentLadyStyle = {
    color: props.color,
    fontSize: "18px"
  };
  return <p style={contentLadyStyle}>{props.children}</p>;
};

export default ColorfulMessage;
