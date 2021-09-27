import React, { useCallback, useEffect, useState } from "react";
import { FC } from "react";
import Card from "../card";

interface Props {}

const Count: FC<Props> = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount((item) => {
        return item + 1;
      });
    }, 1000);
  }, []);
  const fun = useCallback(() => {
    console.log("click");
  }, []);
  return (
    <div>
      <Card content={"count"} onClick={fun} />
      {count}
    </div>
  );
};

export default Count;
