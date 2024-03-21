import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("lightblue");

  const colors = [
    "#ff0000",
    "#ff4000",
    "#ff8000",
    "#ffbf00",
    "#ffff00",
    "#bfff00",
    "#80ff00",
    "#40ff00",
    "#00ff00",
    "#00ff40",
    "#00ff80",
    "#00ffbf",
    "#00ffff",
    "#00bfff",
    "#0080ff",
    "#0040ff",
    "#0000ff",
    "#4000ff",
    "#8000ff",
    "#bf00ff",
    "#ff00ff",
    "#ff00bf",
    "#ff0080",
    "#ff0040",
    "#ff8080",
    "#ff9966",
    "#ff9933",
    "#ff9900",
    "#ffcc66",
    "#ffcc33",
    "#ffcc00",
    "#ffff66",
    "#ffff33",
    "#ffff00",
    "#ccff66",
    "#ccff33",
    "#ccff00",
    "#99ff66",
    "#99ff33",
    "#99ff00",
    "#66ff66",
    "#66ff33",
    "#66ff00",
    "#33ff66",
    "#33ff33",
    "#33ff00",
    "#00ff66",
    "#00ff33",
    "#00ff00",
    "#666666",
  ];

  let background = document.querySelector("body");
  background.style.backgroundColor = backgroundColor;

  const addValue = () => {
    if (counter < 20) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setCounter(counter + 1);
      setBackgroundColor(randomColor);
    }
  };

  const removeValue = () => {
    if (counter > 1) {
      const randomColorTwo = colors[Math.floor(Math.random() * colors.length)];
      setCounter(counter - 1);
      setBackgroundColor(randomColorTwo);
    }
  };

  return (
    <>
      <div className="counter-outside">
        <h1>This is Counter-App</h1>
        <p>The new number is: {counter}</p>
        <button onClick={addValue}>Increase Value</button>
        <button onClick={removeValue}>Decrease Value</button>
      </div>
    </>
  );
}

export default App;
