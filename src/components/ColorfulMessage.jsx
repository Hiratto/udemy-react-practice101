import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentLadyStyle = {
    color: color,
    fontSize: "18px"
  };
  return <p style={contentLadyStyle}>{children}</p>;
};

export default ColorfulMessage;
