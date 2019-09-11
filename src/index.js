import React from "react";
import { render } from "react-dom";
import App from "./App";

import "prismjs";
import "prismjs/themes/prism.css";

import "./less/payex.less";

const { brand } = process.env;

const style = async () => await import(`./less/documentation-${brand}.less`);

console.log("style:: ", style); // <-- returns a function?

render(
    <App style />,
    document.getElementById("designguide")
);

if (module.hot) {
    module.hot.accept();
}
