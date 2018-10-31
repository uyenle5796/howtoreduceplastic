import React, { Component } from 'react';
import BlogCover from '../blogCover/cover.js';
import Navigation from '../blogNavigation/navigation.js';

class Tip8 extends Component {

  constructor() {
    super();

    this.state = {
      id : 8,
      title : "Write to Businesses",
      image : 'img/tip8_cover.svg',
      linkToPrevTip : 'tip7',
      linkToNextTip : 'tip9'
    }
  }

  render() {
    return (
      <div>
        <BlogCover id={this.state.id} title={this.state.title} coverImage={this.state.image}/>

        <div className="post-content">
          Due to having high durability that helps keep food fresh for longer, prevents contamination as well as being very easy & cheap to produce,
          plastic has been the go-to choice for producers to package their products in.
          Almost any supermarket or convenience stores you go to, you will always find products packaged in plastic (eg. vegetables, sweets bags, fizzy drinks bottles, cleaning products, etc).
          <br/>
          It is therefore without doubt that one of the best ways to reduce plastic waste and pollution is to stop producing them. Although efforts have been made in adding a small charge to plastic bags, paper cups, etc
          to discourage people using them, in the end they are already produced and will probably end up as waste. It is therefore best to ditch them completely.
          <br/><br/>

          You can help solve this problem by <b>emailing businesses and encourage them to rethink their packaging problem</b> by contacting their Customer Services email.
          Almost every company will have an email on their website that you can reach out to for any enquiries. Better yet, Greenpeace has created a page where you can easily tell your supermarket of choice about this problem: <a href="https://act.greenpeace.org/page/29634/action/1">Tell your supermarket CEOs to ditch plastic</a>.
          <br/><br/>
          Having direct feedback from the consumers create much greater impact and therefore encourage the producers to make a change!

          <img id="tip8-illustration" src="img/tip8_illustrations/tip8_illustrations.svg" alt="drawing"/>
        </div>

        <Navigation linkToPrevTip={this.state.linkToPrevTip} linkToNextTip={this.state.linkToNextTip}/>
      </div>
    );
  }
}

export default Tip8;
