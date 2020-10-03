import React, { useState } from 'react';
import FacebookLogo from '../assets/icon-facebook.svg';
import TwitterLogo from '../assets/icon-twitter.svg';
import InstagramLogo from '../assets/icon-instagram.svg';
import YoutubeLogo from '../assets/icon-youtube.svg';
import IconDown from '../assets/icon-down.svg';
import IconUp from '../assets/icon-up.svg';
import '../styles/reset.css';
import '../styles/main.css';

function Main() {

  function handleChange() {
    let checkbox = document.querySelector('input[name=theme]');

    checkbox.addEventListener('change', function () {
      if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    })
  }

  return (
    <div className="bg-main">
      <header>
        <div className="heading-container">
          <div className="titles">
            <h1>Social Media Dashboard</h1>
            <p>Total Followers: 23,004</p>
          </div>
          <div className="seperator"></div>
          <div className="toggle">
            <span>Dark Mode</span>
            <input type="checkbox"
              id="switch"
              name="theme"
              onChange={handleChange} />
            <label htmlFor="switch">Toggle</label>
          </div>
        </div>
      </header>
      <section className="grid-section container">
        <div className="grid-container">
          <div className="card card-1">
            <div className="social">
              <img className="logos" src={FacebookLogo} />
              <p className="name">@isaacg</p>
            </div>
            <p className="number">1998</p>
            <p className="subtitle">Followers</p>
            <div className="daily">
              <img className="arrows" src={IconUp} />
              <p className="today">15 Today</p>
            </div>
          </div>
          <div className="card card-2">
            <div className="social">
              <img className="logos" src={TwitterLogo} />
              <p className="name">@isaacgdev</p>
            </div>
            <p className="number">1019</p>
            <p className="subtitle">Followers</p>
            <div className="daily">
              <img className="arrows" src={IconUp} />
              <p className="today">99 Today</p>
            </div>
          </div>
          <div className="card card-3">
            <div className="social">
              <img className="logos" src={InstagramLogo} />
              <p className="name">@isaacg</p>
            </div>
            <p className="number">1019</p>
            <p className="subtitle">Followers</p>
            <div className="daily">
              <img className="arrows" src={IconUp} />
              <p className="today">99 Today</p>
            </div>
          </div>
          <div className="card card-4">
            <div className="social">
              <img className="logos" src={YoutubeLogo} />
              <p className="name">@isaacg</p>
            </div>
            <p className="number">1019</p>
            <p className="subtitle">Followers</p>
            <div className="daily">
              <img className="arrows" src={IconDown} />
              <p className="today">99 Today</p>
            </div>
          </div>
        </div>
      </section>
      <section id="overview-section">
        <h1 className="heading-container">Overview - Today</h1>
        <div className="sm-grid-container container">
          <div className="sm-card sm-card-1">
            <div className="sm-left">
              <p className="sm-title">Page Views</p>
              <p className="sm-number">98</p>
            </div>
            <div className="sm-right">
              <img className="logos" src={FacebookLogo} />
              <div className="sm-percent">
                <img className="arrows" src={IconUp} />
                <p className="today">3%</p>
              </div>
            </div>
          </div>
          <div className="sm-card sm-card-2">
            <div className="sm-left">
              <p className="sm-title">Likes</p>
              <p className="sm-number">100</p>
            </div>
            <div className="sm-right">
              <img className="logos" src={FacebookLogo} />
              <div className="sm-percent">
                <img className="arrows" src={IconDown} />
                <p className="today">3%</p>
              </div>
            </div>
          </div>
          <div className="sm-card sm-card-3">
            <div className="sm-left">
              <p className="sm-title">Likes</p>
              <p className="sm-number">5462</p>
            </div>
            <div className="sm-right">
              <img className="logos" src={InstagramLogo} />
              <div className="sm-percent">
                <img className="arrows" src={IconUp} />
                <p className="today">2020%</p>
              </div>
            </div>
          </div>
          <div className="sm-card sm-card-4">
            <div className="sm-left">
              <p className="sm-title">Profile Views</p>
              <p className="sm-number">98k</p>
            </div>
            <div className="sm-right">
              <img className="logos" src={InstagramLogo} />
              <div className="sm-percent">
                <img className="arrows" src={IconUp} />
                <p className="today">1375%</p>
              </div>
            </div>
          </div>
          <div className="sm-card sm-card-5">
            <div className="sm-left">
              <p className="sm-title">Retweets</p>
              <p className="sm-number">119</p>
            </div>
            <div className="sm-right">
              <img className="logos" src={TwitterLogo} />
              <div className="sm-percent">
                <img className="arrows" src={IconUp} />
                <p className="today">303%</p>
              </div>
            </div>
          </div>
          <div className="sm-card sm-card-6">
            <div className="sm-left">
              <p className="sm-title">Likes</p>
              <p className="sm-number">500</p>
            </div>
            <div className="sm-right">
              <img className="logos" src={TwitterLogo} />
              <div className="sm-percent">
                <img className="arrows" src={IconDown} />
                <p className="today">5%</p>
              </div>
            </div>
          </div>
          <div className="sm-card sm-card-7">
            <div className="sm-left">
              <p className="sm-title">Likes</p>
              <p className="sm-number">100</p>
            </div>
            <div className="sm-right">
              <img className="logos" src={YoutubeLogo} />
              <div className="sm-percent">
                <img className="arrows" src={IconUp} />
                <p className="today">75%</p>
              </div>
            </div>
          </div>
          <div className="sm-card sm-card-8">
            <div className="sm-left">
              <p className="sm-title">Total Views</p>
              <p className="sm-number">5000</p>
            </div>
            <div className="sm-right">
              <img className="logos" src={YoutubeLogo} />
              <div className="sm-percent">
                <img className="arrows" src={IconUp} />
                <p className="today">375%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;