import React, { PropTypes, Component } from 'react';
import logo from '../../materials/react_logo.svg';
import './style.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="React-logo" alt="logo" />
          <h1 className="Home-title">Home | TutorS</h1>
        </header>
        <p className="Home-intro">
            Hello, This is homepage.
        </p>
      </div>
    )
  }
}

export default Home;