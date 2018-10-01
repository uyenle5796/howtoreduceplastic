import React, { Component } from 'react';
import BlogCover from '../blogCover/cover.js';

class Tip1 extends Component {

  constructor() {
    super();

    this.state = {
      id : 12,
      title : "Spread the Message!",
      image : 'img/tip12_cover.svg'
    }
  }

  render() {
    return (
      <div>
        <BlogCover id={this.state.id} title={this.state.title} coverImage={this.state.image}/>

        <div className="post-content">
            <p>Something here</p>
        </div>

      </div>
    );
  }
}

export default Tip1;
