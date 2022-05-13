import React, {useState} from "react";

function App() {

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  function reload() {
    setTime(new Date().toLocaleTimeString())
  }
  setInterval(reload, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={reload}>Get Time</button>
    </div>
  );
}

export default App;