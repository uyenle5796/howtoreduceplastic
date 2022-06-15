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
          Bring your own reusables whenever and wherever you go is one of the most effective ways to reduce plastic. Some essentials are:
          <br/><br/>
          <img className="centered tip2-illustration" src="img/tip2_illustrations/bring_reusables.svg" alt="drawing"/>
          <br/>
          <ul><li>See <a href="/tip5">Tip 5</a> for list of reusable products you can buy from.</li></ul>
        </div>

        <Navigation linkToPrevTip={this.state.linkToPrevTip} linkToNextTip={this.state.linkToNextTip}/>
      </div>
    );
  }
}

export default Tip2;
