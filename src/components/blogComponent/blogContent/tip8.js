import React, { Component } from 'react';
import BlogCover from '../blogCover/cover.js';
import Navigation from '../blogNavigation/navigation.js';

class Tip8 extends Component {

  constructor() {
    super();

    this.state = {
      id : 8,
      title : "Write to Businesses",
      image : 'img/tip8_cover_stripped.svg',
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
          Almost any shops or supermarkets you go to, you will always find products packaged in plastic: meat, vegetables, sweets, fizzy drinks, cleaning products, etc.
          <br/>
          Therefore, one of the best ways to reduce plastic waste and pollution is to <b>stop producing them</b>. Although efforts have been made to reduce plastic waste such as adding a small charge to plastic bags, paper cups, etc.
          in the end, they are already produced and will probably end up as waste. Therefore it is best to ditch them completely.
          <br/><br/>

          You can help solve this problem by <b>emailing businesses and encourage them to rethink their pointless packaging</b>.
          Almost every company will have an email on their website that you can reach out to for any enquiries. Better yet, Greenpeace has created a page where you can easily tell your supermarket of choice about this problem: <a href="https://act.greenpeace.org/page/29634/action/1">Tell your supermarket CEOs to ditch plastic</a>.
          <br/><br/>
          Giving direct feedback to busineses will create much greater impact and hence better encourage them to make a change!

          <img className="centered tip8-illustration" src="img/tip8_illustrations/flying_letter.svg" alt="drawing"/>
        </div>

        <Navigation linkToPrevTip={this.state.linkToPrevTip} linkToNextTip={this.state.linkToNextTip}/>
      </div>
    );
  }
}

export default Tip8;
