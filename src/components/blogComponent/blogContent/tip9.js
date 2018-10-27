import React, { Component } from 'react';
import BlogCover from '../blogCover/cover.js';
import Navigation from '../blogNavigation/navigation.js';

class Tip9 extends Component {

  constructor() {
    super();

    this.state = {
      id : 9,
      title : "Sign Petitions",
      image : 'img/tip9_cover.svg',
      linkToPrevTip : 'tip8',
      linkToNextTip : 'tip10'
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

export default Tip9;
