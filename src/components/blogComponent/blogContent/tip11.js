import React, { Component } from 'react';
import BlogCover from '../blogCover/cover.js';
import Navigation from '../blogNavigation/navigation.js';

class Tip11 extends Component {

  constructor() {
    super();

    this.state = {
      id : 11,
      title : "Stay Informed",
      image : 'img/tip11_cover.svg',
      linkToPrevTip : 'tip10',
      linkToNextTip : 'tip12'
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
              <li><a href="https://www.bbc.co.uk/search?q=plastic#page=2">BBC News on Plastic</a></li>
            </ul>
        </div>

        <Navigation linkToPrevTip={this.state.linkToPrevTip} linkToNextTip={this.state.linkToNextTip}/>
      </div>
    );
  }
}

export default Tip11;
