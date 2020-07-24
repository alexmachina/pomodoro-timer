import React from "react";
import Play from "./Play";
export default { title: "Button" };

export const PlayButton: React.FC = () => <Play onClick={() => alert("aaa")} />;
