import React, { Component } from 'react';
import BlogCover from '../blogCover/cover.js';
import Navigation from '../blogNavigation/navigation.js';

class Tip1 extends Component {

  constructor() {
    super();

    this.state = {
      id : 1,
      title : "Say No to Single-Use Plastic",
      image : 'img/tip1_cover.svg',
      linkToNextTip : 'tip2'
    };
  }

  render() {
    return (
      <div>
        <BlogCover id={this.state.id} title={this.state.title} coverImage={this.state.image}/>

        <div className="post-content">
        </div>

        <Navigation linkToPrevTip="" linkToNextTip={this.state.linkToNextTip}/>
      </div>
    );
  }
}

export default Tip1;
