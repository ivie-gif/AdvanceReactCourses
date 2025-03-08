import React from 'react';

// function ChildComponent() {
//     console.log('ChildComponent re-rendered');
//     return <div>Child Component</div>;
//   }

const ChildComponent = React.memo(() => {
    console.log('memoized child component re-rendered');
    return (
        <div>Memonized child</div>
    )
})
  
export default ChildComponent; 