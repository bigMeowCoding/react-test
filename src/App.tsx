import React, { useState } from "react";

import FlexExercise from "./flex";
import CSSMotion from "rc-motion";
import classNames from "classnames";
import "./index.css";
function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      {/*<FlexExercise />*/}
      <button
        onClick={() => {
          setVisible((v) => {
            console.log("v", v);
            return !v;
          });
        }}
      >
        sdf
      </button>
      <CSSMotion visible={visible} motionName="my-motion">
        {({ className, style }) => (
          <div className={classNames(className, "box")} style={style} />
        )}
      </CSSMotion>
      ;
    </div>
  );
}

export default App;
