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
          For items that you love or eat a lot of, for example crisps, sweets, cereals, buy them in larger quantities.
          This will help reduce packaging dramatically, plus you save money too!
          <br/><br/>
          <img className="centered tip4-illustration" src="img/tip4_illustrations/buy_in_bulk.svg" alt="drawing"/>
        </div>

        <Navigation linkToPrevTip={this.state.linkToPrevTip} linkToNextTip={this.state.linkToNextTip}/>
      </div>
    );
  }
}

export default Tip4;
