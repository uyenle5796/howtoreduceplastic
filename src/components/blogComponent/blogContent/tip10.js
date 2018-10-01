import React, { Component } from 'react';
import BlogCover from '../blogCover/cover.js';
import Pagination from '../blogPagination/pagination.js';

class Tip1 extends Component {

  constructor() {
    super();

    this.state = {
      id : 10,
      title : "Educate Yourself",
      image : 'img/tip10_cover.svg',

      linkTo: 'tip11',
      nextTipid : 11,
      nextTipTitle : "Stay Informed"
    }
  }

  render() {
    return (
      <div>
        <BlogCover id={this.state.id} title={this.state.title} coverImage={this.state.image}/>

        <div className="post-content">
          Below are some resources that I have read and found incredibly useful in understanding about plastics, such as different types of plastics, their uses,
            effects on the environment and ways that we can reduce plastic consumption:
          <ul>
            <li><h4>Books:</h4></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.goodreads.com/book/show/38587839-how-to-give-up-plastic"><b>How to Give Up Plastic</b> by Will McAllum</a></li>
            or simply search for "books on plastic" for much more books!
            <br/>
            <h4>News articles:</h4>
            <li>BBC News</li>
          </ul>
        </div>

        <Pagination linkTo={this.state.linkTo} id={this.state.nextTipid} title={this.state.nextTipTitle}/>
      </div>
    );
  }
}

export default Tip1;
