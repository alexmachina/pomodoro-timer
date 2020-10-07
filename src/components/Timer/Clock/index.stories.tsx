import { KeyboardCapslock } from "@material-ui/icons";
import React from "react";
import Clock from "./";

export default {
  title: "Timer/Clock",
  component: Clock,
};

export const Basic = () => <Clock time="25:00" />;
