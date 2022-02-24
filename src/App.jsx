import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFrag, setFaceShowFrag] = useState(true);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFrag = () => {
    setFaceShowFrag(!faceShowFrag);
  };

  if (num % 3 === 0) {
    faceShowFrag || setFaceShowFrag(true);
  } else {
    faceShowFrag && setFaceShowFrag(false);
  }

  return (
    <>
      {/* 外側の{}はJS、内側はオブジェクトとして */}
      {/* styleは文字列として認識させないと×、''で囲うこと */}
      <h1 style={{ color: "red" }}>Hello!!</h1>
      <ColorfulMessage color="blue">World!!</ColorfulMessage>
      <ColorfulMessage color="pink">Japan!!!!!!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFrag}>オン/オフ</button>
      <p>{num}</p>
      {faceShowFrag && <p>o_o</p>}
    </>
  );
};

export default App;
