import React, { Component } from 'react';
import BlogCover from '../blogCover/cover.js';
import Navigation from '../blogNavigation/navigation.js';

class Tip12 extends Component {

  constructor() {
    super();

    this.state = {
      id : 12,
      title : "Spread the Message!",
      image : 'img/tip12_cover.svg',
      linkToPrevTip : 'tip11'
    }
  }

  render() {
    return (
      <div>
        <BlogCover id={this.state.id} title={this.state.title} coverImage={this.state.image}/>

        <div className="post-content">
            <p>Something here</p>
        </div>

        <Navigation linkToPrevTip={this.state.linkToPrevTip} linkToNextTip="" />
      </div>
    );
  }
}

export default Tip12;
