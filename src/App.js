import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Button = (props) => (
  <button>{props.btnName} </button>
)

const Hello = ({color, idx, text}) => {
  return (
    <h1 style={{color: color}}>
      <i>{idx} {text}</i>
    </h1>
  )
}

class App extends Component {
  render() {
    let hello = []
    
    for(let i = 0; i < 10; i++) {
      if(i%2 == 0) {
        hello[i] = <Hello color="pink" text="Selamat sore" idx={i}  />
      } else {
        hello[i] = <Hello color="blue" text="Selamat sore" idx={i}  />
      }
    }

    return (
      <div className="App">
        { hello }
        <Button btnName="Click saya!" />
      </div>
    );
  }
}

export default App;
