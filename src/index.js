import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { AttendanceApp } from "./AttendanceApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AttendanceApp />
  </StrictMode>,
  rootElement
);
