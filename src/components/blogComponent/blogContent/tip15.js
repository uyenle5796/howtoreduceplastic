import React, { Component } from "react";
import BlogCover from "../blogCover/cover.js";
import Navigation from "../blogNavigation/navigation.js";

class Tip15 extends Component {
  constructor() {
    super();

    this.state = {
      id: 15,
      title: "Hey Girls, Free Your Period from Plastic!",
      image: "img/tip15_cover.svg",
      linkToPrevTip: "tip14",
      productsList: []
    };
  }

  componentDidMount() {
    this.getList();
  }

  getList() {
    this.setState({
      productsList: [
        {
          id: 1,
          title: "TOTM",
          linkTo: "https://www.totm.com"
        },
        {
          id: 2,
          title: "Natracare",
          linkTo: "https://www.natracare.com"
        },
        {
          id: 3,
          title: "SheThinx",
          linkTo: "https://www.shethinx.com"
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
          Period pads and tampons are essential for us girls - we can't live
          without them. However they also come with lots of plastic in the
          wrappers and packaging. They're also non-recyclable, hence end up in
          landfill after a single use.
          <br />
          So why not make a simple switch with these revolutionary products
          below? They can be reused over and over again, are are super comfy
          too!
          {this.state.productsList.map(item => {
            return (
              <ul key={item.id}>
                <li>
                  <a href={item.linkTo}>{item.title}</a>
                </li>
              </ul>
            );
          })}
          <br />
          <img
            className="centered tip15-illustration"
            src="img/tip15_illustrations/shethinx.svg"
            alt="drawing"
          />
        </div>

        <Navigation linkToPrevTip={this.state.linkToPrevTip} linkToNextTip="" />
      </div>
    );
  }
}

export default Tip15;
