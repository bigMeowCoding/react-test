import React from "react";
import styles from "./about.scss";
import CSSModules from "react-css-modules";

const about = function () {
  return <div className="parent">about</div>;
};

export default CSSModules(about, styles);
