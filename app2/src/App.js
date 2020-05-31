import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      {/* <Greet name="Piotr" fuelType="Oil">
        <p>Piotr Children</p>
      </Greet>      
      <Greet name="Vinay" fuelType="Gas">
        <button>Vinay Children</button>
      </Greet>
      <Welcome name="Piotr" fuelType="Oil"/> */}
      {/* <Hello/> */}
      {/* <Message /> */}
      <Counter />
    </div>
  );
}

export default App;
