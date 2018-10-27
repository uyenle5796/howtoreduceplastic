import React, { Component } from 'react';
import BlogCover from '../blogCover/cover.js';
import Navigation from '../blogNavigation/navigation.js';

class Tip5 extends Component {

  constructor() {
    super();

    this.state = {
      id : 5,
      title : "Choose Eco-friendly Alternatives",
      image : 'img/tip5_cover.svg',
      linkToPrevTip : 'tip4',
      linkToNextTip : 'tip6'
    }
  }

  render() {
    return (
      <div>
        <BlogCover id={this.state.id} title={this.state.title} coverImage={this.state.image}/>

        <div className="post-content">
          Almost every household product that we use daily have alternative eco-friendly versions.
          They are available at almost every grocery shop, usually displayed next to the normal plastic products. Just simply look or ask for them next time you go shopping.
          <br/><br/>

          However, if they are not available at your nearby shops, you can also find them online.
          Below is the list of eco-friendly products that I recommend, some of which I have personally used and loved (they are just as good as the plastic versions!).
          They are usually bit more expensive, but it is so worth it knowing that your purchase can really help save the environment, right?
          (Bonus: all of them offer discounts and worldwide shipping!)
          <br/><br/>

          <div className="tip5-product-list">
            <div>
              <img src="img/tip5_illustrations/tip5_cleaningproduct.svg" alt="Cleaning Product" width="80" />
            </div>
            <div>
            <b>Cleaning Products:</b>
              <ul>
                <li><a href="https://www.ecover.com/household/">Ecover</a></li>
              </ul>
            </div>

            <div>
              <br/>
              <img src="img/tip5_illustrations/tip5_foodwrap.svg" alt="Food Wrap" width="100" />
            </div>
            <div>
              <b>Food Wraps:</b>
              <ul>
                <li><a href="https://www.beeswrap.com">Bees Wrap</a></li>
                <li><a href="https://www.beeswaxwraps.co.uk">The Beeswax Wrap Co.</a></li>
                <li>or just use aluminium foil or baking paper!</li>
              </ul>
            </div>

            <div>
              <br/>
              <img src="img/tip5_illustrations/tip5_toothbrush.svg" alt="Toothbrush" width="70" />
            </div>
            <div>
              <br/>
              <b>Bamboo Toothbrush:</b>
              <ul>
                <li><a href="https://thehumble.co">Humble Brush</a> (also has natural toothpaste, floss, cotton swabs, etc)</li>
                <li><a href="https://www.brushbox.com">Brushbox</a></li>
              </ul>
            </div>

            <div>
              <br/>
              <img src="img/tip5_illustrations/tip5_cup.svg" alt="Cup" width="100" />
            </div>
            <div>
              <br/>
              <b>Drinking Bottles / Cups:</b>
              <ul>
                <li><a href="https://www.ecover.com/household/">KeepCup</a></li>
                <li><a href="https://stojo.co">Stojo</a></li>
                <li><a href="https://www.rcup.co.uk">rCup</a></li>
              </ul>
            </div>

            <div>
              <br/>
              <img src="img/tip5_illustrations/tip5_cutlery.svg" alt="Cutlery" width="100" />
            </div>
            <div>
              <br/>
              <b>Straws and Cutlery:</b>
              <ul>
                <li><a href="https://www.amazon.co.uk/s/ref=nb_sb_noss_1?url=search-alias%3Dkitchen&field-keywords=paper+straws">Paper straws on Amazon</a></li>
                <li><a href="https://netzerostraw.com">Net Zero Straw</a></li>
                <li><a href="https://www.josephjoseph.com/en-gb/goeat-cutlery-set">Cutlery set by Joseph Joseph</a></li>
              </ul>
            </div>

            <div>
              <br/>
              <img src="img/tip5_illustrations/tip5_tissues.svg" alt="Others" width="100" />
            </div>
            <div>
              <br/>
              <b>Other Alternatives:</b>
              <ul>
                <li>Use soap over hand-wash bottles</li>
                <li>Biodegradable bin bags (available on <a href="https://www.amazon.co.uk/s/ref=nb_sb_ss_i_3_5?url=search-alias%3Dkitchen&field-keywords=biodegradable+bin+bags&sprefix=biode%2Ckitchen%2C152&crid=2FAMZME2COHMH">Amazon</a>)</li>
                <li>Recycled paper tissues (available on <a href="https://www.amazon.co.uk/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=recycled+toilet+tissue&rh=i%3Aaps%2Ck%3Arecycled+toilet+tissue">Amazon</a>)</li>
              </ul>
            </div>

          </div>
        </div>

        <Navigation linkToPrevTip={this.state.linkToPrevTip} linkToNextTip={this.state.linkToNextTip}/>
      </div>
    );
  }
}

export default Tip5;
