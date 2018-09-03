import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <header>
        <div className="site-name">
          <li>
            <Link to="/">How to Ditch Plastic</Link>
          </li>
        </div>
      </header>
    );
  }
}

export default Header;
