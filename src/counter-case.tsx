import React, {memo, useCallback, useMemo, useState} from "react";
const Counter = memo(function Counter(props: { count?: number; click?: any }) {
    console.log("render");
    return <div onClick={props.click}>{props.count || 0}</div>;
});
const CounterCase = function () {
  const [num, setNum] = useState(0);

  const double = useMemo(() => {
    return num * 2;
  }, [num === 2]);
  const clickHandle = useCallback(() => {
    setNum((v) => v + 1);
  }, []);
  return (
    <div className="App">
      <button onClick={clickHandle}>button</button>
      {num} {double}
      <Counter count={double} click={clickHandle}></Counter>
    </div>
  );
};
export default CounterCase;
