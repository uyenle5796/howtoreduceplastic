import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer>
        <nav>
          <ul>
            <div className="footer-links">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li id="buy-zine-link">
                <a href="https://gum.co/reduce-plastic-zine">Buy Zine</a>
              </li>
            </div>
            <div className="social-media-links">
              <li>
                <a href="mailto:hellouyenle@gmail.com">
                  <div className="email-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"
                        fill="#d0cfcf"
                      />
                    </svg>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/howtoreduceplastic">
                  <div className="instagram-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                    >
                      <path
                        d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"
                        fill="#d0cfcf"
                      />
                    </svg>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/howtoreduceplastic/">
                  <svg
                    className="facebook-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                      fill="#d0cfcf"
                    />
                  </svg>
                </a>
              </li>
            </div>
            <li id="author-link">
              Made by <a href="http://uyenle5796.github.io">Uyen Le</a>
            </li>
          </ul>
        </nav>
      </footer>
    );
  }
}

export default Footer;
