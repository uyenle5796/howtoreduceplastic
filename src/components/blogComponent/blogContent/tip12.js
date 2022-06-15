import React, { Component } from "react";
import BlogCover from "../blogCover/cover.js";
import Navigation from "../blogNavigation/navigation.js";

class Tip12 extends Component {
  constructor() {
    super();

    this.state = {
      id: 12,
      title: "Donate to Charities",
      image: "img/tip12_cover.svg",
      linkToPrevTip: "tip11",
      linkToNextTip: "tip13",
      webPagesList: []
    };
  }

  componentDidMount() {
    this.getPages();
  }

  getPages() {
    this.setState({
      webPagesList: [
        {
          id: 1,
          title: "WWF",
          linkTo:
            "https://www.nationalgeographic.com/environment/planetorplastic/"
        },
        {
          id: 2,
          title: "Greenpeace",
          linkTo: "https://www.bbc.co.uk/search?q=plastic&filter=news&suggid="
        },
        {
          id: 3,
          title: "Marine Conservation Society",
          linkTo: "https://www.theguardian.com/uk/environment"
        },
        {
          id: 4,
          title: "Plastic Oceans Foundation",
          linkTo: "https://www.wired.co.uk/topic/wired-on-climate-change"
        },
        {
          id: 5,
          title: "Surfers Against Sewage",
          linkTo:
            "https://www.weforum.org/system-initiatives/shaping-the-future-of-environment-and-natural-resource-security/articles"
        },
        {
          id: 6,
          title: "Sea Life Trust",
          linkTo:
            "https://www.drudgereportarchives.com/dsp/search.htm?searchFor=plastic"
        },
        {
          id: 7,
          title: "5Gyres",
          linkTo: "https://www.5gyres.org"
        },
        {
          id: 8,
          title: "Plastic Pollution Coalition",
          linkTo: "https://www.plasticpollutioncoalition.org"
        }
      ]
    });
  }

  render() {
    return (
      <div>
        <BlogCover
          id={this.state.id}
          title={this.state.title}
          coverImage={this.state.image}
        />

        <div className="post-content">
          If there are any charities whose work focus on something you care
          about, making a small donation to those charities will show them a lot
          of trust & support and therefore motivate them to keep going. It
          doesn't have to be much, a one-off donation of as little as £1 is just
          as amazing!
          <br />
          Below are some top charities that focus on tackling plastic waste and
          pollution and protect the ocean:
          {this.state.webPagesList.map(item => {
            return (
              <ul key={item.id}>
                <li>
                  <a href={item.linkTo}>{item.title}</a>
                </li>
              </ul>
            );
          })}
          <br />
          Finally, you can also shop at{" "}
          <a href="http://smile.amazon.co.uk">smile.amazon.co.uk</a>, where
          Amazon will donate a small proportion of your purchases towards a
          charity of your choice.
          <img
            className="centered tip12-illustration"
            src="img/tip12_illustrations/thankyou_turtle.svg"
            alt="drawing"
          />
        </div>

        <Navigation
          linkToPrevTip={this.state.linkToPrevTip}
          linkToNextTip={this.state.linkToNextTip}
        />
      </div>
    );
  }
}

export default Tip12;
