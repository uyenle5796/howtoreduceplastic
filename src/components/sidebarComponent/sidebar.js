import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

      </div>
    );
  }
}

export default Sidebar;
