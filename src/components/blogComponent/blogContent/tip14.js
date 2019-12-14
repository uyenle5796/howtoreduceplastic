import React, { Component } from "react";
import BlogCover from "../blogCover/cover.js";
import Navigation from "../blogNavigation/navigation.js";

class Tip14 extends Component {
  constructor() {
    super();

    this.state = {
      id: 14,
      title: "Change Your Washing Game",
      image: "img/tip14_cover.svg",
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
          Guess what? Clothes actually don't need to be washed after every wear!
          For example, a wool top or a pair of jeans can be worn up to 5 times.
          Of course, this depends on the weather as well. If you live in a dry
          and cold climate, clothes can be worn 4-5 times before washing! Bonus:
          you'll save so much on electricity and water too!
          <br />
          Here are some tips on how you change your laundry routine:
          <ul>
            <li>
              <b>Wash less often</b> (check out{" "}
              <a href="https://www.businessinsider.sg/how-often-to-wash-jeans-and-clothes-2017-5/">
                this guide
              </a>{" "}
              to see how often clothes should be washed)
            </li>
            <li>
              <b>Wash cold</b>
            </li>
            <li>
              <b>Use gentle cycle</b>
            </li>
            <li>
              <b>Air dry</b> instead of machine dried
            </li>
            <li>
              <b>
                Use <a href="https://guppyfriend.com/en/">Guppyfriend bags</a>
              </b>{" "}
              to prevent harmful microplastics from entering rivers and oceans
            </li>
          </ul>
          <br />
          <img
            className="centered tip14-illustration"
            src="img/tip14_illustrations/washing_machine.svg"
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
