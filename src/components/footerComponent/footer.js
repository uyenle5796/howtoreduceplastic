import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li id="buy-zine-link">
              <a href="https://howtoreduceplastic.teemill.com">Shop</a>
            </li>
            <li id="buy-zine-link">
              <a href="https://gum.co/reduce-plastic-zine">Buy Zine</a>
            </li>
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
              <a href="https://twitter.com/uyenlex">
                <svg
                  className="twitter-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24,4.6728587 C23.1169538,5.05836581 22.1679798,5.31891366 21.1719522,5.43609538 C22.1886097,4.8361872 22.9692966,3.88628937 23.3369472,2.75448334 C22.385603,3.30988667 21.3318117,3.71328214 20.2102491,3.93070781 C19.3120158,2.98867395 18.0323494,2.4 16.6161747,2.4 C13.8968068,2.4 11.6921321,4.57019507 11.6921321,7.24696775 C11.6921321,7.62685774 11.7357621,7.99680977 11.8196862,8.35155236 C7.72742236,8.14942254 4.09928673,6.21972653 1.67075606,3.28724536 C1.24692198,4.00312542 1.00410403,4.83575512 1.00410403,5.72403748 C1.00410403,7.40562972 1.8734555,8.88924016 3.19464501,9.75842433 C2.3874465,9.73327692 1.62826731,9.51524633 0.964336662,9.15220769 C0.963985515,9.17242931 0.963985515,9.19273735 0.963985515,9.21313181 C0.963985515,11.5616056 2.66125315,13.5206834 4.91377154,13.9659048 C4.50055964,14.0766917 4.06557665,14.1358874 3.61646,14.1358874 C3.29919895,14.1358874 2.99071656,14.105555 2.69013497,14.0489517 C3.3166685,15.9746726 5.13508175,17.3760138 7.28971799,17.4151608 C5.60456491,18.7151347 3.48144409,19.4900377 1.17458576,19.4900377 C0.777175464,19.4900377 0.385207945,19.4671372 0,19.4223731 C2.17904093,20.7976163 4.76725557,21.6 7.54789861,21.6 C16.6046746,21.6 21.5572479,14.2141814 21.5572479,7.8090252 C21.5572479,7.59885857 21.5525074,7.38981537 21.5430264,7.18198201 C22.5049929,6.49859482 23.3398442,5.64487933 24,4.6728587"
                    fill="#d0cfcf"
                  />
                </svg>
              </a>
            </li>
            <li id="author-mark">
              Made by <a href="https://uyen-le.me">Uyen Le</a>
            </li>
          </ul>
        </nav>
      </footer>
    );
  }
}

export default Footer;
