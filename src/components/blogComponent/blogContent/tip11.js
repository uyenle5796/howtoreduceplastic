import React, { Component } from 'react';
import BlogCover from '../blogCover/cover.js';
import Pagination from '../blogPagination/pagination.js';

class Tip1 extends Component {

  constructor() {
    super();

    this.state = {
      id : 11,
      title : "Stay Informed",
      image : 'img/tip11_cover.svg',

      linkTo: 'tip12',
      nextTipid : 12,
      nextTipTitle : "Spread the Message!"
    }
  }

  render() {
    return (
      <div>
        <BlogCover id={this.state.id} title={this.state.title} coverImage={this.state.image}/>

        <div className="post-content">
            <p>Subscribe to websites for latest news on plastic!</p>
            <ul>
              <li>National Geographic</li>
              <li>BBC News</li>
            </ul>
        </div>

        <Pagination linkTo={this.state.linkTo} id={this.state.nextTipid} title={this.state.nextTipTitle}/>
      </div>
    );
  }
}

export default Tip1;
