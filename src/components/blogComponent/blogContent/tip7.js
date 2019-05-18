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
          You've probably seen recycling bins for different types of waste on the street, in shops or your office,
          such as one for recycling (eg. paper, plastic, cans, glass) and one for non-recycling (eg. food waste, cooking oil, plastic wraps).
          So why not adopt this in your home too? Instead of having one central bin for everything, have at least 3 bins: one for food waste, one for recycling, one for non-recycling (trash).
          <img className="centered tip7-illustration" src="img/tip7_illustrations/recycling_guide.svg" alt="Recycling Guide"/>

          This will make it <b>much easier to recycle as less effort is required to wash and clean them before processing.
          Plus, you learn to manage and be responsible for your own waste too.</b>
          <br/><br/>
          Unless your household has waste collection, you can bring your recycling rubbish to a local recycling centre so they can be recycled.<br/>
          Tip: Most recycling centres also have clothes donation, so you can donate and recycle old clothes too!<br/>
          Use the map below for all recycling centres in UK and find ones near you:
          <br/><br/>
          <iframe id="tip7-google-maps" title="Google Maps of Recycling Centres in UK" src="https://www.google.com/maps/d/u/0/embed?mid=1dzrsebmOLfBiMpOK5Tn1cIsCTjpYDeka"></iframe>
        </div>

        <Navigation linkToPrevTip={this.state.linkToPrevTip} linkToNextTip={this.state.linkToNextTip}/>
      </div>
    );
  }
}

export default Tip7;
