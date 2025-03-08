import React from 'react';
// import logo from './logo.svg';
import './App.css';
const ParentComponent = React.lazy(() => import('./components/parentComponent'));

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
    <div className="App">
     <ParentComponent />
    </div>
    </React.Suspense>
  );
}

export default App;
