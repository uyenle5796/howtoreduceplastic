import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pagination extends Component {

  render() {
    return (
      <div className="blog-pagination">
        <li>
          <Link to="/tip2">See tip {this.props.id}: {this.props.title}</Link>
        </li>
      </div>
    );
  }
}

export default Pagination;
