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
          <p>The following sites contain a wealth of latest news on plastic as well as animals and the environment.
          Keep yourself informed by subscribing to these websites!</p>
          <ul>
            <li><a href="https://www.nationalgeographic.com/environment/planetorplastic/">National Geographic: Planet or Plastic?</a></li>
            <li><a href="https://www.bbc.co.uk/search?q=plastic&filter=news&suggid=">BBC News on Plastic</a></li>
            <li><a href="https://www.weforum.org/system-initiatives/shaping-the-future-of-environment-and-natural-resource-security/articles">World Economic Forum</a></li>
            <li><a href="https://www.drudgereportarchives.com/dsp/search.htm?searchFor=plastic">The Drudge Report</a> which has collection of latest news on plastic from all over the internet!</li>
            <li>Finally, your smartphone is another a great source of information. Simply search for "Plastic pollution" on your phone's news reading app. The world really is your oyster!</li>
          </ul>
        </div>

        <Navigation linkToPrevTip={this.state.linkToPrevTip} linkToNextTip={this.state.linkToNextTip}/>
      </div>
    );
  }
}

export default Tip11;
