import React, { Component } from 'react';
import BlogCover from '../blogCover/cover.js';
import Navigation from '../blogNavigation/navigation.js';

class Tip9 extends Component {

  constructor() {
    super();

    this.state = {
      id : 9,
      title : "Sign Petitions",
      image : 'img/covers/tip9_cover.svg',
      linkToPrevTip : 'tip8',
      linkToNextTip : 'tip10',
      petitionsList: []
    }
  }

  componentDidMount() {
    this.getPetitionsList();
  }

  getPetitionsList() {
    this.setState({
      petitionsList: [
        {
          id: 1,
          siteName: "WWF",
          petitions: [
            {
              id: 1,
              name: "Fight Against Plastic Pollution",
              linkTo: 'https://www.wwf.org.uk/fight-plastic-pollution'
            }
          ]
        },
        {
          id: 2,
          siteName: "Greenpeace",
          petitions: [
            {
              id: 1,
              name: "Plastic-free supermarkets!",
              linkTo: 'https://secure.greenpeace.org.uk/page/s/plastic-free-supermarkets?source=WB&subsource=OCPOPSPEWB01FC&utm_source=gpeace&utm_medium=WB&utm_campaign=OCPOPSPEWB01FC'
            },
            {
              id: 2,
              name: "Tell the UK Environment Secretary to ban plastic by end of 2019",
              linkTo: 'https://secure.greenpeace.org.uk/page/s/ban-problem-plastics?source=EM&subsource=OCPOPSPEEM01LY&utm_source=gpeace&utm_medium=EM&utm_campaign=OCPOPSPEEM01LY'
            }
          ]
        },
        {
          id: 3,
          siteName: "Marine Conservation Society UK",
          petitions: [
            {
              id: 1,
              name: "Stop the Plastic Tide!",
              linkTo: 'https://www.mcsuk.org/appeal/plastic-levy'
            }
          ]
        },
        {
          id: 4,
          siteName: "UK Parliament",
          petitions: [
            {
              id: 1,
              name: "See petitions on plastic",
              linkTo: 'https://petition.parliament.uk/petitions?q=plastic&state=open'
            }
          ]
        },
        {
          id: 5,
          siteName: "Change.org",
          petitions: [
            {
              id: 1,
              name: "See petitions on plastic",
              linkTo: 'https://www.change.org/search?q=plastic&offset=10'
            }
          ]
        },
        {
          id: 6,
          siteName: "Plastic Pollution Coalition",
          petitions: [
            {
              id: 2,
              name: "The Last Plastic Straw",
              linkTo: "https://www.plasticpollutioncoalition.org/no-straw-please"
            }
          ]
        }
      ]
    });
  }

  render() {
    return (
      <div>
        <BlogCover id={this.state.id} title={this.state.title} coverImage={this.state.image}/>

        <div className="post-content">
          Signing petitions is a great way to support causes you care about and ask for change to be made.
          They usually involves making large scale changes, therefore require as much support from the public as possible.
          Once the petition has enough signatures, the organiser can then present those signatures and ask for change directly to big companies and coorporations.
          Therefore, the more signatures there are mean that more chance the change can be made! <b>More signatures = more impact = more change!</b>
          <br/>
          A minute of your life and your signature can make a significant difference! Start signing some petitions calling to ban plastic below:
          <br/><br/>

          <div>
            { this.state.petitionsList.map(site => {
                var petitions = site.petitions.map(petition => {
                  return (
                    <div>
                      <ul key={petition.id}>
                        <li><a href={petition.linkTo}>{petition.name}</a></li>
                      </ul>
                    </div>
                  )
                });
                return (
                  <div key={site.id}>
                    <h4>{site.siteName}:</h4>
                      {petitions}
                  </div>
                )
              })
            }
          </div>

          <img className="centered tip9-illustration" src="img/tip9_illustrations/you_are_amazing.svg" alt="drawing"/>
        </div>

        <Navigation linkToPrevTip={this.state.linkToPrevTip} linkToNextTip={this.state.linkToNextTip}/>
      </div>
    );
  }
}

export default Tip9;
