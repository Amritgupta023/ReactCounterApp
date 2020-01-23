import React from "react";
import ReactDOM from "react-dom";

import CounterComponent from "./components/counterComponent";
import "bootstrap/dist/css/bootstrap.min.css";
// const element = <h1>Hello world</h1>;
// console.log("elemnt", element);

ReactDOM.render(<CounterComponent />, document.getElementById("root"));
