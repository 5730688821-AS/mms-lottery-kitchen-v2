import React, { PropTypes, Component } from 'react';
import logo from '../../material/react_logo.svg';
import './style.css';

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <header className="Search-header">
          <img src={logo} className="React-logo" alt="logo" />
          <h1 className="Search-title">Search | TutorS</h1>
        </header>
        <p className="Search-intro">
            Hello, This is search page.
        </p>
      </div>
    )
  }
}

export default Search;