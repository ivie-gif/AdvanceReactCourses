import React from 'react';

// original react function that re-renders a page multiple times
// function ChildComponent() {
//     console.log('ChildComponent re-rendered');
//     return <div>Child Component</div>;
//   }


// using memo that allows the page to stop rerendering the child component
const ChildComponent = React.memo(() => {
    console.log('memoized child component re-rendered');
    return (
        <div>Memonized child</div>
    )
})
  
export default ChildComponent; 