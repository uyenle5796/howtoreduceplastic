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
      linkToNextTip : 'tip12',
      webPagesList: []
    }
  }

  componentDidMount() {
    this.getPages();
  }

  getPages() {
    this.setState({
      webPagesList: [
        {
          id: 1,
          title: "National Geographic: Planet or Plastic?",
          linkTo: "https://www.nationalgeographic.com/environment/planetorplastic/"
        },
        {
          id: 2,
          title: "BBC News on Plastic",
          linkTo: "https://www.bbc.co.uk/search?q=plastic&filter=news&suggid="
        },
        {
          id: 3,
          title: "The Guardian: Environment",
          linkTo: "https://www.theguardian.com/uk/environment"
        },
        {
          id: 4,
          title: "WIRED on Climate Change",
          linkTo: "https://www.wired.co.uk/topic/wired-on-climate-change"
        },
        {
          id: 5,
          title: "World Economic Form",
          linkTo: "https://www.weforum.org/system-initiatives/shaping-the-future-of-environment-and-natural-resource-security/articles"
        },
        {
          id: 6,
          title: "The Drudge Report",
          linkTo: "https://www.drudgereportarchives.com/dsp/search.htm?searchFor=plastic"
        }
      ]
    })
  }
  render() {
    return (
      <div>
        <BlogCover id={this.state.id} title={this.state.title} coverImage={this.state.image}/>

        <div className="post-content">
          Just because plastic waste and pollution don't seem apparent in your daily life, doesn't mean that they're not happening. So skip that ignorance and open your eyes to what's happening around you.
          Keeping yourself informed about latest news on plastic as well as the environment in general will give yourself much better understanding and awareness on
          how plastic is affecting the world we live in today. You don't have to go far, the following sites have a wealth of information on latest news on plastic:
          <br/><br/>

          { this.state.webPagesList.map(item => {
              return (
                <ul key={item.id}>
                  <li><a href={item.linkTo}>{item.title}</a></li>
                </ul>
              )
            })
          }
          
          <li>Finally, your smartphone is another a great source of information - simply search for "plastic pollution" on your phone's news app. The world really is at your fingertips!</li>
          <br/>
          <img className="centered tip11-illustration" src="img/tip11_illustrations/happy_reading.svg" alt="drawing"/>
        </div>

        <Navigation linkToPrevTip={this.state.linkToPrevTip} linkToNextTip={this.state.linkToNextTip}/>
      </div>
    );
  }
}

export default Tip11;
