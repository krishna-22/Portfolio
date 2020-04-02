import React from 'react';
import './App.css';
import Main from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
      <div id="parent">
        <Main />
      </div>
    </BrowserRouter>
  
  );
}

export default App;
