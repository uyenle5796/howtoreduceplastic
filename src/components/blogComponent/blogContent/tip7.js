import React, { Component } from "react";
import BlogCover from "../blogCover/cover.js";
import Navigation from "../blogNavigation/navigation.js";

class Tip7 extends Component {
  constructor() {
    super();

    this.state = {
      id: 7,
      title: "Sort Your Rubbish and Recycle It",
      image: "img/tip7_cover.svg",
      linkToPrevTip: "tip6",
      linkToNextTip: "tip8"
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
          <h4>First, sort your rubbish...</h4>
          You've probably seen recycling bins for different types of waste on
          the street, in shops or your office, such as one for recycling (eg.
          paper, plastic, cans, glass) and one for non-recycling (eg. food
          waste, cooking oil, plastic wraps). So why not adopt this in your home
          too? Instead of having one central bin for everything, have at least 3
          bins: one for food waste, one for recycling, one for non-recycling
          (trash).
          <img
            className="centered tip7-illustration"
            src="img/tip7_illustrations/recycling_guide.svg"
            alt="Recycling Guide"
          />
          <br />
          <h4>
            Recycle the "unrecyclable" with{" "}
            <a href="https://www.terracycle.com">Terracycle</a>
          </h4>
          Luckily, many items in the Trash bin may not end up in landfill, as
          many packaging with "unrecyclable" labels can actually still be
          recycled in some parts. Terracycle offers a range of{" "}
          <a href="https://www.terracycle.com/en-GB/brigades">
            free recycling programmes
          </a>{" "}
          that recycle almost everything that you think is unrecyclable, from
          chocolate wrappers, snack wrappers to beauty products packaging. All
          you need to do is signup for an account, then drop-off your packaging
          at their drop-off locations throughout UK or post your packaging for
          free using pre-paid labels.
          <br />
          <b>Note:</b> Your local recycling centers may already be doing this,
          so make sure to check with them first.
          <br />
          <br />
          <h4>Find a recycling centre near you</h4>
          Use the interactive map below for all recycling centres in UK and find
          the one near you:
          <br />
          <br />
          <iframe
            id="tip7-google-maps"
            title="Google Maps of Recycling Centres in UK"
            src="https://www.google.com/maps/d/u/0/embed?mid=1dzrsebmOLfBiMpOK5Tn1cIsCTjpYDeka"
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

export default Tip7;
