import React from 'react';
import Login from './Login';
import Register from './Register';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1> Auth </h1>
      <Login />
      <Register />
    </div>
  );
};

export default App;
