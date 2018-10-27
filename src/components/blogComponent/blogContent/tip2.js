import React, { Component } from 'react';
import BlogCover from '../blogCover/cover.js';
import Navigation from '../blogNavigation/navigation.js';

class Tip2 extends Component {

  constructor() {
    super();

    this.state = {
      id : 2,
      title : "Bring Your Own Reusables",
      image : 'img/tip2_cover.svg',
      linkToPrevTip : 'tip1',
      linkToNextTip : 'tip3'
    }
  }

  render() {
    return (
      <div>
        <BlogCover id={this.state.id} title={this.state.title} coverImage={this.state.image}/>

        <div className="post-content">
            <p>Something here</p>
        </div>

        <Navigation linkToPrevTip={this.state.linkToPrevTip} linkToNextTip={this.state.linkToNextTip}/>
      </div>
    );
  }
}

export default Tip2;
