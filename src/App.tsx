import React from "react";
import Play from "./Play";
import "./index.css";

const App: React.FC = () => {
  return (
    <div>
      <Play onClick={() => alert("aaaa")} />
    </div>
  );
};

export default App;
