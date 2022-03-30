import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useFetchColorsQuery } from './store/features/user/userSlice';

function App() {

  const {data, isLoading} = useFetchColorsQuery()

  console.log('====================================');
  console.log(data);
  console.log(isLoading);
  console.log('====================================');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
