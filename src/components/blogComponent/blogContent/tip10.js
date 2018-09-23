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
            <p>Something here</p>
        </div>

        <Pagination linkTo={this.state.linkTo} id={this.state.nextTipid} title={this.state.nextTipTitle}/>
      </div>
    );
  }
}

export default Tip1;
