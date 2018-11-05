import React, { Component } from 'react';
import './App.css';

const QuakeItem = ({mags, dir, city, date}) => (
  <div className="quake-item">
    <div className="mags">{mags || 3.2}</div>
    <div className="city">
      <span>{dir || "13 KM NE"}</span>
      <span>{city || "San, Simeon, CA"}</span>
    </div>
    <div>{date || "Jan 17, 2017"}</div>
  </div>
)

class App extends Component {
  render() {
    return (
      <>
        {/* pakai default value */}
        <QuakeItem />

        {/* pakai value dari props */}
        <QuakeItem mags="4.0" city="SAF" dir="14 KM NE" date="Mar 14, 2000" />
      </>
    );
  }
}

export default App;
