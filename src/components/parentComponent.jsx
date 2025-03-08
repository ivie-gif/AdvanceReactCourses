import React from 'react';
import ChildComponent from './childComponent';


function ParentComponent() {
    const [count, setCount] = React.useState(0);
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <ChildComponent />
      </div>
    );
  }
  
export default ParentComponent;