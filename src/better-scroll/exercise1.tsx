import  React, { useEffect, useRef } from "react";
import { FC } from "react";
import { Mock } from "../common/utils/mock";
import BScroll from "@better-scroll/core";

interface Props {}

const BExercise1: FC<Props> = () => {
  const wrapperEl = useRef<HTMLDivElement | null>(null);
  const data = new Mock().mockArray(
    {
      name: "@string",
    },
    100
  );
  useEffect(() => {
    if (!wrapperEl.current) {
      return;
    }
    console.log(wrapperEl);
    new BScroll(wrapperEl.current, {});
  }, []);
  return (
    <div ref={wrapperEl} style={{ height: "100vh", overflow: "hidden" }}>
      <div>
        {data.map((item) => {
          return <div>{item.name}</div>;
        })}
      </div>
    </div>
  );
};

export default BExercise1;
