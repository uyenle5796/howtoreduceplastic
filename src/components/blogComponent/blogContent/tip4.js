import React, { Component } from 'react';
import BlogCover from '../blogCover/cover.js';
import Navigation from '../blogNavigation/navigation.js';

class Tip4 extends Component {

  constructor() {
    super();

    this.state = {
      id : 4,
      title : "Buy in Bulk",
      image : 'img/tip4_cover.svg',
      linkToPrevTip : 'tip3',
      linkToNextTip : 'tip5'
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

export default Tip4;
