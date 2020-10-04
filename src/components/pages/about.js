import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="pages">
        <div className="post-content">
          <br />
          How To Reduce Plastic was created with the hope to help fight the{" "}
          <a href="https://www.nationalgeographic.com/magazine/2018/06/plastic-planet-waste-pollution-trash-crisis/">
            global plastic pollution problem
          </a>
          .
          <br />
          <br />
          The site contains top tips, actions and resources on different ways
          that anyone can do to reduce their personal plastic consumption.
          Through this site, I hope to spread the message that reducing plastic
          consumption can be very fun and easy, and that together we can make a
          change to save the environment, one step at a time.{" "}
          <span role="img" aria-label="Globe">
            🌏
          </span>
          <span role="img" aria-label="Tree">
            🌳
          </span>
          <span role="img" aria-label="Whale">
            🐋
          </span>
          <br />
          <br />
          <p id="about-subtitle">Suggestions?</p>
          If you have any feedback, suggestions or simply want to chat, feel
          free to <a href="mailto:hellouyenle@gmail.com">drop me an email</a>.
          I'd love to hear from you!{" "}
          <span role="img" aria-label="Smiley Face">
            😊
          </span>
          <br />
          <br />
          <p id="about-subtitle"> Love this? Support me!</p>
          This website was built during my free time and is fully self-funded.
          If you love this site, please support me via{" "}
          <a href="https://gum.co/reduce-plastic-zine">
            How To Reduce Plastic Zine
          </a>
          !
        </div>
      </div>
    );
  }
}

export default About;
