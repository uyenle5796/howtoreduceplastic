import React, { Component } from "react";
import BlogCover from "../blogCover/cover.js";
import Navigation from "../blogNavigation/navigation.js";

class Tip14 extends Component {
  constructor() {
    super();

    this.state = {
      id: 14,
      title: "Change your Washing",
      image: "img/grey.jpg",
      linkToPrevTip: "tip13",
      linkToNextTip: "tip15"
    };
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
          Guess what, clothes actually don't need to be washed after every wear!
          For example, a wool top or a pair of jeans can be worn up to 5 times.
          Of course, this depends on the weather as well. If you live in a dry
          and cold climate, clothes can be worn many times.
          <br />
          Some tips:
          <ul>
            <li>
              Wash less often. Check out{" "}
              <a href="https://www.businessinsider.sg/how-often-to-wash-jeans-and-clothes-2017-5/">
                this guide
              </a>{" "}
              to see how often you should wash your clothes
            </li>
            <li>Wash cold</li>
            <li>Use gentle cycle</li>
            <li>Air dry</li>
            <li>
              Use{" "}
              <a href="https://guppyfriend.com/en/">Guppyfriend wash bags</a> to
              collect all microplastics from your clothes
            </li>
          </ul>
          <br />
          Bonus points: you'll save so much on electricity and water bills too!
          <img
            className="centered tip14-illustration"
            src="img/grey.jpg"
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

export default Tip14;
