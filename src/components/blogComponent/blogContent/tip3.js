import React, { Component } from 'react';
import BlogCover from '../blogCover/cover.js';
import Pagination from '../blogPagination/pagination.js';

class Tip1 extends Component {

  constructor() {
    super();

    this.state = {
      id : 3,
      title : "Buy Without Plastic Packaging",
      image : 'img/tip3_cover.svg',

      linkTo: 'tip4',
      nextTipid : 4,
      nextTipTitle : "Buy in Bulk"
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
