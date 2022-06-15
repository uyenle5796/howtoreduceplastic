import React, { Component } from 'react';
import BlogCover from '../blogCover/cover.js';
import Navigation from '../blogNavigation/navigation.js';

class Tip6 extends Component {

  constructor() {
    super();

    this.state = {
      id : 6,
      title : "Volunteer",
      image : 'img/tip6_cover.svg',
      linkToPrevTip : 'tip5',
      linkToNextTip : 'tip7'
    }
  }

  render() {
    return (
      <div>
        <BlogCover id={this.state.id} title={this.state.title} coverImage={this.state.image}/>

        <div className="post-content">
          <div>
            <img className="centered tip6-title1-image" src="img/tip6_illustrations/tip6_title1.svg" alt="Join a Beach Clean"/>
            Beach cleaning is one of the best ways to protect the ocean and marine life from plastic waste and pollution.
            Using the tools provided, you just need to pick up any waste you see when walking along the beach. Not only so, you will make new friends as well!
            See below are organisations who organise beach cleans around the UK, simply sign up and start cleaning!

            <br/><br/>
            <a href="https://www.mcsuk.org/beachwatch/">Marine Conversation Society Beachwatch</a> (for all MSC volunteering opportunities see <a href="https://www.mcsuk.org/get-active/">here</a>)<br/>
            <a href="https://www.sas.org.uk/our-work/beach-cleans/">Surfers Against Sewage Beach Clean</a>
          </div>

          <div>
            <br/><br/>
            <img src="img/tip6_illustrations/tip6_title2.svg" alt="Participate in Litter Picking"/><br/>
            Can not make it to any nearby beaches? Good news, you can also participate litter picking at your local areas, communities, villages! Having a clean, tidy neighborhood also makes a great difference!
            <br/><br/>
            <a href="https://plasticpatrol.co.uk/">Plastic Patrol</a><br/>
            <a href="http://www.keepbritaintidy.org/get-involved/support-our-campaigns/great-british-spring-clean">Keep Britain Tidy Spring Clean</a> (for all  volunteering opportunities from Keep Britain Tidy see <a href="http://www.keepbritaintidy.org/become-care-project-volunteer">here</a>)
          </div>

          <div>
            <br/><br/>
            <img src="img/tip6_illustrations/tip6_title3.svg" alt="Green Spaces Cleaning at Your Local Community"/><br/>
            Similarly to litter picking, The Conservation Volunteers Green Gym offers volunteering opportunities where you can get active by doing conservation works in your local communities to provide green spaces for everyone. It is also a great way to stay fit while having fun!
            <br/><br/>
            <a href="https://www.tcv.org.uk/volunteering">TCV Green Gym</a>
          </div>

          <br/><br/><br/>
          <img src="img/tip6_illustrations/tip6_beachClean.svg" alt="Beach Clean"/>
        </div>

        <Navigation linkToPrevTip={this.state.linkToPrevTip} linkToNextTip={this.state.linkToNextTip}/>
      </div>
    );
  }
}

export default Tip6;
