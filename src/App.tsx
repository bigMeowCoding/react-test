import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import "./App.css";
const Info: FC<{ title: number; callback: () => void }> = memo(
  ({ title, callback }) => {
    return <div>{title}</div>;
  }
);
function App() {
  const ref = useRef<number>(0),
    [state, setState] = useState(0);
  useEffect(() => {
  }, [ref.current]);
  const callback = useCallback(() => {}, []);
  useEffect(() => {}, [state]);
  return (
    <>
      <div>{state}</div>
      <button
        onClick={() => {
          // ref.current = ref.current + 1;
          setState((a) => a + 1);
        }}
      >
        change
      </button>
      <Info title={ref.current} callback={callback} />
    </>
  );
}

export default App;
