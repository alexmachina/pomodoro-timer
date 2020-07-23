import React from "react";
import Timer from "./Timer";
import Play from "./Play";
export default { title: "Button" };

export const PomoTimer = () => <Timer ms={25000} />;
export const PlayButton = () => <Play />;
