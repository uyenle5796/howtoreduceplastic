import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';

class Header extends Component {

  render() {
    return (
      <header>
        <div className="site-name">
          <li>
            <Link to="/">
              <img src={logo} alt={"logo"} />
            </Link>
          </li>
        </div>
      </header>
    );
  }
}

export default Header;
