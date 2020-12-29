import React from "react";
import styles from "./about.scss";
import styles2 from './about2.css';
import CSSModules from "react-css-modules";

const About =  ()=> {
  console.log(styles, styles2)
  return <div className={styles2.parent}>about</div>;
};

export default CSSModules(About, styles);
