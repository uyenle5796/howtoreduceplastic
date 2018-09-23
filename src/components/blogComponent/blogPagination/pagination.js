import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pagination extends Component {

  render() {
    return (
      <div className="blog-pagination">
        <li>
          <Link to={this.props.linkTo}>See tip {this.props.id}: {this.props.title}
          </Link>
        </li>
      </div>
    );
  }
}

export default Pagination;
