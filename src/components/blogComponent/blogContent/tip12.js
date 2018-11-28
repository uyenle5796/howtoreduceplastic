import React, { Component } from 'react';
import BlogCover from '../blogCover/cover.js';
import Navigation from '../blogNavigation/navigation.js';

class Tip12 extends Component {

  constructor() {
    super();

    this.state = {
      id : 12,
      title : "Donate to Charities",
      image : 'img/covers/tip12_cover.svg',
      linkToPrevTip : 'tip11'
    }
  }

  render() {
    return (
      <div>
        <BlogCover id={this.state.id} title={this.state.title} coverImage={this.state.image}/>

        <div className="post-content">
          If there are any charities whose work focus on something you care about, making a small donation to those charities will
          show them a lot of trust & support and therefore motivate them to keep going. It doesn't have to be much, a one-off donation of
          as little as £1 is just as amazing!
          <br/>
          Below are some top charities that focus on tackling plastic waste and pollution and protect the ocean:
          <ul>
            <li><a href="https://www.wwf.org.uk">WWF</a></li>
            <li><a href="https://www.greenpeace.org.uk">Greenpeace</a></li>
            <li><a href="https://mcsuk.org">Marine Conservation Society</a></li>
            <li><a href="https://plasticoceans.org">Plastic Oceans Foundation</a></li>
            <li><a href="https://www.sas.org.uk">Surfers Against Sewage</a></li>
            <li><a href="https://www.sealifetrust.org">Sea Life Trust</a></li>
            <li><a href="https://www.5gyres.org">5Gyres</a></li>
            <li><a href="https://www.plasticpollutioncoalition.org">Plastic Pollution Coalition</a></li>
          </ul>
          <br/>
          <img className="centered tip12-illustration" src="img/tip12_illustrations/thankyou_turtle.svg" alt="drawing"/>
        </div>

        <Navigation linkToPrevTip={this.state.linkToPrevTip} linkToNextTip="" />
      </div>
    );
  }
}

export default Tip12;
