import React, { Component } from 'react';

class Header extends Component {

  toggleSidebar() {

  }

  render() {
    return (
      <header>
        <div className="site-name">Top Tips Plastic</div>

        <div className="sidebar-button" onClick={this.toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </header>
    );
  }
}

export default Header;
