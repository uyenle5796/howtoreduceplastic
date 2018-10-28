import React, { Component } from 'react';
import BlogCover from '../blogCover/cover.js';
import Navigation from '../blogNavigation/navigation.js';

class Tip8 extends Component {

  constructor() {
    super();

    this.state = {
      id : 8,
      title : "Write to Businesses",
      image : 'img/tip8_cover.svg',
      linkToPrevTip : 'tip7',
      linkToNextTip : 'tip9'
    }
  }

  render() {
    return (
      <div>
        <BlogCover id={this.state.id} title={this.state.title} coverImage={this.state.image}/>

        <div className="post-content">
            <a href="https://act.greenpeace.org/page/29634/action/1">Greenpeace: Tell your supermarket CEOs to ditch plastic</a>

            <img id="tip8-illustration" src="img/tip8_illustrations/tip8_illustrations.svg" alt="drawing"/>
        </div>

        <Navigation linkToPrevTip={this.state.linkToPrevTip} linkToNextTip={this.state.linkToNextTip}/>
      </div>
    );
  }
}

export default Tip8;
