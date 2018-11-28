import React, { Component } from 'react';
import BlogCover from '../blogCover/cover.js';
import Navigation from '../blogNavigation/navigation.js';

class Tip11 extends Component {

  constructor() {
    super();

    this.state = {
      id : 11,
      title : "Stay Informed",
      image : 'img/covers/tip11_cover_stripped.svg',
      linkToPrevTip : 'tip10',
      linkToNextTip : 'tip12'
    }
  }

  render() {
    return (
      <div>
        <BlogCover id={this.state.id} title={this.state.title} coverImage={this.state.image}/>

        <div className="post-content">
          Just because plastic waste and pollution don't seem apparent in your daily life, doesn't mean that they're not happening. So skip that ignorance and open your eyes to what's happening around you.
          Keeping yourself informed about latest news on plastic as well as the environment in general will give yourself much better understanding and awareness on
          how plastic is affecting the world we live in today. You don't have to go far, the following sites have a wealth of information on latest news on plastic:
          <ul><br/>
            <li><a href="https://www.nationalgeographic.com/environment/planetorplastic/">National Geographic: Planet or Plastic?</a></li>
            <li><a href="https://www.bbc.co.uk/search?q=plastic&filter=news&suggid=">BBC News on Plastic</a></li>
            <li><a href="https://www.plasticpollutioncoalition.org/plasticfreetimes">Plastic Pollution Coalition - Latest News</a></li>
            <li><a href="https://www.weforum.org/system-initiatives/shaping-the-future-of-environment-and-natural-resource-security/articles">World Economic Forum</a></li>
            <li><a href="https://www.drudgereportarchives.com/dsp/search.htm?searchFor=plastic">The Drudge Report</a> has collection of news on from all over the internet.</li>
            <li><a href="https://www.5gyres.org/newsletter-sign-up/">Subscribe to 5Gyres.org newsletter</a></li>
            <li>Finally, your smartphone is another a great source of information - simply search for "plastic pollution" on your phone's news app. The world really is at your fingertips!</li>
          </ul>
          <br/>
          <img className="centered tip11-illustration" src="img/tip11_illustrations/happy_reading.svg" alt="drawing"/>
        </div>

        <Navigation linkToPrevTip={this.state.linkToPrevTip} linkToNextTip={this.state.linkToNextTip}/>
      </div>
    );
  }
}

export default Tip11;
