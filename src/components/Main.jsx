import React, { Component } from 'react';
import '../styles/reset.css';
import '../styles/light.css';

class Main extends Component {
  render() {
    return (
      <div className="bg-color">
        <header className="container">
          <div className="titles">
            <h1>Social Media Dashboard</h1>
            <p>Total Followers: 23,004</p>
          </div>
          <div className="toggle">
            <span>Dark Mode</span>
          </div>
        </header>
      </div>
    );
  }
}

export default Main;