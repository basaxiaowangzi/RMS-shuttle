import React from 'react';
import './App.css';
import Routes from './routes/wrapper'

function App() {
  return (
    <div className="App">
      <React.Suspense >
        <Routes />
      </React.Suspense>
    </div>
  );
}

export default App;
