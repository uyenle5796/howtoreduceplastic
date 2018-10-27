import React, { Component } from 'react';
import BlogCover from '../blogCover/cover.js';
import Navigation from '../blogNavigation/navigation.js';

class Tip7 extends Component {

  constructor() {
    super();

    this.state = {
      id : 7,
      title : "Sort Your Rubbish and Recycle at Nearest Recycling Centre",
      image : 'img/tip7_cover.svg',
      linkToPrevTip : 'tip6',
      linkToNextTip : 'tip8'
    }
  }

  render() {
    return (
      <div>
        <BlogCover id={this.state.id} title={this.state.title} coverImage={this.state.image}/>

        <div className="post-content">
            <p>Google Maps API of all recycling centres in UK</p>
        </div>

        <Navigation linkToPrevTip={this.state.linkToPrevTip} linkToNextTip={this.state.linkToNextTip}/>
      </div>
    );
  }
}

export default Tip7;
