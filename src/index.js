import "./default.css";

import Layout from "./Layout";

const body = document.getElementsByTagName("body")[0];

const left = document.createTextNode("LEFT");
const right = document.createTextNode("RIGHT");

const layout = new Layout(body, { left, right });

layout.render();
