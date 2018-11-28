import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {

  render() {
    return (
      <div className="blog-navigation">
        { this.props.linkToPrevTip !== "" ?
          <li><Link to={this.props.linkToPrevTip}>Previous Tip</Link></li> : ""
        }
        { this.props.linkToNextTip !== "" ?
            <li><Link to={this.props.linkToNextTip}>Next Tip</Link></li> : ""
        }
      </div>
    );
  }
}

export default Navigation;
