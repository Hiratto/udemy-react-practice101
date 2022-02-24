import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  return (
    <>
      {/* 外側の{}はJS、内側はオブジェクトとして */}
      {/* styleは文字列として認識させないと×、''で囲うこと */}
      <h1 style={{ color: "red" }}>Hello!!</h1>
      <ColorfulMessage color="blue">World!!</ColorfulMessage>
      <ColorfulMessage color="pink">Japan!!!!!!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

export default App;
