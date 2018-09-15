import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <header>
        <div className="site-name">
          <li>
            <Link to="/">
              <img src='img/logo.svg' style={{width: 100}} alt={"logo"} />
            </Link>
          </li>
        </div>
      </header>
    );
  }
}

export default Header;
