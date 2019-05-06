import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer>
        <nav>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li id="buy-zine-link"><a href="https://gum.co/GnAEQ">Buy Zine!</a></li>
            <li id="instagram">
              <a href="https://instagram.com/howtoreduceplastic">
                <img src="img/icons8-instagram.svg" alt="instagram"/>
              </a>
            </li>
            <li id="twitter">
              <a href="https://twitter.com/uyenlex">
                <img src="img/icons8-twitter.svg" alt="twitter"/>
              </a>
            </li>
            <li id="author-mark">Made by <a href="https://uyen-le.me">Uyen Le</a></li>
          </ul>
        </nav>
      </footer>
    );
  }
}

export default Footer;
