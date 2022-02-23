import React from "react";

const ColorfulMessage = (props) => {
  const contentLadyStyle = {
    color: props.color,
    fontSize: "18px"
  };
  return <p style={contentLadyStyle}>{props.message}</p>;
};

export default ColorfulMessage;
