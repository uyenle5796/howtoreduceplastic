import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="pages">
        <div className="post-content">

          <h3 id="about-subheading">Your 101 guide on cutting down plastic waste.</h3>
          <br/>
          <b>How To Reduce Plastic</b> was created with the hope to help fight the ever-increasing <a href="https://www.nationalgeographic.com/magazine/2018/06/plastic-planet-waste-pollution-trash-crisis/">global plastic pollution problems</a>.
          <br/><br/>
          The site contains top tips, actions and resources on different ways that anyone can do to reduce their personal plastic consumption.
          Through this site, we hope to spread the message that reducing plastic consumption can be very fun and easy,
          and that together we can make a change to save the environment, one step at a time. <span role="img" aria-label="Globe">🌏</span>
          <span role="img" aria-label="Tree">🌳</span>
          <span role="img" aria-label="Whale">🐋</span>
          <br/><br/>

          <h4 id="about-subtitle"> Contact</h4>
          Please <a href="mailto:hellouyenle@gmail.com">drop me an email</a> or tweet me @<a href="https://twitter.com/uyenlex">uyenlex</a> if you have any feedback, suggestions about the site, or simply want to have a chat - I'd love to hear from you! <span role="img" aria-label="Smiley Face">😊</span>
          <br/><br/>

          <h4 id="about-subtitle"> Love this? Support me!</h4>
          This website was built during my free time and is fully self-funded. If you love this site, I've also created a zine so you can print out, read it anytime, use as posters or gift it to a friend:<br/>
          <a className="gumroad-button" href="https://gum.co/reduce-plastic-zine" target="_blank" rel="noopener noreferrer"> Buy Zine</a>
        </div>

    </div>
    );
  }
}

export default About;
