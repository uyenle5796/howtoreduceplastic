import React, { Component } from 'react';
import BlogCover from '../blogCover/cover.js';
import Navigation from '../blogNavigation/navigation.js';

class Tip1 extends Component {

  constructor() {
    super();

    this.state = {
      id : 1,
      title : "Say No to Single-Use Plastic",
      image : 'img/covers/tip1_cover_stripped.svg',
      linkToNextTip : 'tip2'
    };
  }

  render() {
    return (
      <div>
        <BlogCover id={this.state.id} title={this.state.title} coverImage={this.state.image}/>

        <div className="post-content">
          Single use plastics are plastics that are used only once and thrown away right after, for example coffee cups, food containers, cutlery, straws, milk bottles, and much much more.
          Combined with our "throw away" culture, every day millions of plastics are consumed, but not enough effort has been made to recycle or reuse them fast enough.
          This makes single use plastic a major contributor to plastic waste and pollution to the environment.
          <br/><br/>
          Therefore, the first and most important step to your reducing plastic journey is learning to <b>say no to all single-use plastics</b>.
          You can get started by following some tips below:
          <ul>
            <li>
              <span role="img" aria-label="Cup">🥤</span> <b>Always have a reusable cup, shopping bag and cutlery with you</b> so
               you'll always have them when needed. Make sure to use them when buying drinks and get 25p discount too!
            </li>
            <li>
              <span role="img" aria-label="No">🙅</span>‍ <b>Refuse plastics when offered</b>. This happens a lot when buying takeway as the staff tend to give you additional cutlery and tissues. This also happens during checkout
              at stores when the staff packs your vegetables in plastic bags. Next time you encouter these situations, kindly return them and say "No, thank you. I'm trying to cut down plastic waste."
            </li>
            <li>
              <span role="img" aria-label="Recycle">♻️</span>‍ <b>Be a conscious consumer</b>: check for recycling label on every item before you buy it.
              Avoid buying items that have "Not Currently Recylable" labels and choose those that say "Widely Recycled" instead.
            </li>
          </ul>
          <br/>It may be daunting when you first start doing them, but trust me, keep them in your mind and one day you'll be doing them without even knowing it!

          <img className="centered tip1-illustration" src="img/tip1_illustrations/say_no_to_plastic.svg" alt="drawing"/>
        </div>

        <Navigation linkToPrevTip="" linkToNextTip={this.state.linkToNextTip}/>
      </div>
    );
  }
}

export default Tip1;
