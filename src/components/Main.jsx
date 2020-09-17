import React, { Component } from 'react';
import '../styles/reset.css';
import '../styles/light.css';

class Main extends Component {
  render() {
    return (
      <div className="bg-main">
        <header>
          <div className="container">
            <div className="titles">
              <h1>Social Media Dashboard</h1>
              <p>Total Followers: 23,004</p>
            </div>
            <div className="seperator"></div>
            <div className="toggle">
              <span>Dark Mode</span>
            </div>
          </div>
        </header>
        <section className="grid-section container">
          <div className="grid-container">
            <div className="card card-1">
              <div className="social">
                <i class="fab fa-facebook-square"></i>
                <p className="name">@isaacg</p>
              </div>
              <p className="number">1998</p>
              <p className="subtitle">Followers</p>
              <div className="daily">
                <i class="fas fa-sort-up"></i>
                <p className="today">15 Today</p>
              </div>
            </div>
            <div className="card card-2">
              <div className="social">
                <i class="fab fa-twitter"></i>
                <p className="name">@isaacg</p>
              </div>
              <p className="number">1019</p>
              <p className="subtitle">Followers</p>
              <div className="daily">
                <i class="fas fa-sort-up"></i>
                <p className="today">99 Today</p>
              </div>
            </div>
            <div className="card card-3">
              <div className="social">
                <i class="fab fa-instagram"></i>
                <p className="name">@isaacg</p>
              </div>
              <p className="number">1019</p>
              <p className="subtitle">Followers</p>
              <div className="daily">
                <i class="fas fa-sort-up"></i>
                <p className="today">99 Today</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;