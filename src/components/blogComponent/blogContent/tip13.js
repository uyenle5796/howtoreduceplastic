import React, { Component } from "react";
import BlogCover from "../blogCover/cover.js";
import Navigation from "../blogNavigation/navigation.js";

class Tip13 extends Component {
  constructor() {
    super();

    this.state = {
      id: 13,
      title: "Bin Your Butts!",
      image: "img/grey.jpg",
      linkToPrevTip: "tip12",
      linkToNextTip: "tip14"
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
          Did you know that the number one plastic polluter is actually not
          plastic, but{" "}
          <a href="https://www.nationalgeographic.com/environment/2019/08/cigarettes-story-of-plastic/">
            cigarettes
          </a>
          ?! Yes surprise surprise. Cigrette butts or ends, are made up of a
          plastic called cellulose acetate. Not only are they harmful for your
          health, they pollute the environment and release harmful chemicals
          which are harmful to wildlife. They're also very small, which makes it
          very hard to cleanup (take my word from my{" "}
          <a href="https://www.instagram.com/p/B0djakzpyGl/">
            litter picking experience
          </a>
          , where 70% of the rubbish I collected were cigarette butts).
          <br />
          <br />
          Therefore, if you smoke, please be considerate and bin your cigarette
          butts! You can also get these super colourful, light and affordable{" "}
          <a href="https://www.amazon.co.uk/s?k=cigarette+butt+pouch&crid=18GBYIU69YPWN&sprefix=cigarette+butt+pou%2Caps%2C129&ref=nb_sb_ss_i_1_18">
            ashtray pouches
          </a>{" "}
          to conveniently collect your butts no matter where you are!
          <br />
          <br />
          <img
            className="centered tip13-illustration"
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

export default Tip13;
