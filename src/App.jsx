import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "red",
    // CSSではfont-sizeだが、JSではキャメルケースで書くこと
    fontSize: "18px"
  };
  return (
    <>
      {/* 外側の{}はJS、内側はオブジェクトとして */}
      {/* styleは文字列として認識させないと×、''で囲うこと */}
      <h1 style={{ color: "red" }}>Hello!!</h1>
      {/* 関数を使う際はそのまま{}に入れる */}
      <p style={contentStyle}>World!!</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
