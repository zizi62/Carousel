import React from 'react';
import './App.css';
import state from './state'
import Carousel from './components/Carousel/Carousel';


function App() {
  return (
    <div className="App">
      <Carousel data={state.data} />
    </div>
  );
}

export default App;
