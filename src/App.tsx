import React from "react";
import Play from "./Play";
import "./index.css";

const App = () => {
  return (
    <div>
      <Play onClick={() => alert("aaaa")} />
    </div>
  );
};

export default App;
