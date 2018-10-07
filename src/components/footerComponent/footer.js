import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer>
        <nav>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li id="author-mark">Made by <a href="https://uyen-le.me">Uyen Le</a></li>
          </ul>
        </nav>
      </footer>
    );
  }
}

export default Footer;
