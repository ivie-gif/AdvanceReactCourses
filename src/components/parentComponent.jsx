import React from "react";
// import ChildComponent from "./childComponent";

function ParentComponent() {
  const [count, setCount] = React.useState(0);
  const [counts, setCounts] = React.useState(0);

  // Memoize the functions to prevent unnecessary re-renders
  const increment = React.useCallback(() => setCount((prev) => prev + 1), []);
  const decrement = React.useCallback(() => setCounts((prev) => prev - 1), []);

  return (
    <div>
      <Counter count={count} setCount={increment} />
      <UnrelatedComponent counts={counts} setCounts={decrement} />
    </div>
  );
}

export default ParentComponent;

const Counter = React.memo(({ count, setCount }) => {
  console.log("Counter re-rendered");
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
});

const UnrelatedComponent = React.memo(({ counts, setCounts }) => {
  console.log("UnrelatedComponent re-rendered");
  return (
    <div>
      <p>{counts}</p>
      <button onClick={() => setCounts(counts - 1)}>Decrement</button>
    </div>
  );
});
