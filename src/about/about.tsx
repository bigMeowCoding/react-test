import React, { Fragment } from "react";
import styles from "./about.scss";
import CSSModules from "react-css-modules";

const About = () => {
  return (
    <Fragment>
      <div className={styles["parent-box"]}>
        parent
        <div styleName="child-box">parent inner child</div>
      </div>
      <div styleName="child-box">child</div>
    </Fragment>
  );
};

export default CSSModules(About, styles);
