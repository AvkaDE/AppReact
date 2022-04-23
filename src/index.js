import React from "react";
import App from "./components/app/app";
import ReactDOM from "react-dom";
import { events } from "./mocks"

ReactDOM.render(<App events={events}/>, document.querySelector("#root"))
