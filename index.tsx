import * as React from "react";
import { render } from "react-dom";

function App() {
  const canvasref = React.useRef(null);

  function createBox() {
    const ctx = canvasref.current.getContext("2d");
    ctx.fillStyle = "green";
    ctx.fillRect(10, 10, 150, 100);
  }

  React.useEffect(() => {
    createBox();
  }, []);

  return (
    <canvas
      width={window.innerWidth}
      height={window.innerHeight}
      id="canvas"
      ref={canvasref}
      onClick={createBox}
    ></canvas>
  );
}

render(<App />, document.getElementById("app"));
