import React, { Component } from 'react';
import BlogCover from '../blogCover/cover.js';
import Navigation from '../blogNavigation/navigation.js';

class Tip5 extends Component {

  constructor() {
    super();

    this.state = {
      id : 5,
      title : "Choose Eco-friendly Alternatives",
      image : 'img/covers/tip5_cover_stripped.svg',
      linkToPrevTip : 'tip4',
      linkToNextTip : 'tip6',
      productsList: []
    }
  }
  componentDidMount() {
    this.getProductsList();
  }

  getProductsList() {
    this.setState({
      productsList: [
        {
          id: 1,
          name: "Cleaning Products",
          image: 'img/tip5_illustrations/tip5_cleaningproduct.svg',
          imageWidth: 80,
          brands: [
            {
              id: 1,
              name: "Ecover",
              linkTo: 'https://www.ecover.com/household/'
            }
          ]
        },
        {
          id: 2,
          name: "Food Wraps",
          image: 'img/tip5_illustrations/tip5_foodwrap.svg',
          imageWidth: 100,
          brands: [
            {
              id: 1,
              name: "Bee's Wrap",
              linkTo: 'https://www.beeswrap.com'
            },
            {
              id: 2,
              name: "The Beeswax Wrap Co.",
              linkTo: 'https://www.beeswaxwraps.co.uk'
            }
          ]
        },
        {
          id: 3,
          name: "Bamboo Toothbrush",
          image: 'img/tip5_illustrations/tip5_toothbrush.svg',
          imageWidth: 70,
          brands: [
            {
              id: 1,
              name: "Humble Brush",
              linkTo: 'https://thehumble.co'
            },
            {
              id: 2,
              name: "Brushbox",
              linkTo: 'https://www.brushbox.com'
            }
          ]
        },
        {
          id: 4,
          name: "Drinking Bottles / Cups",
          image: 'img/tip5_illustrations/tip5_cup.svg',
          imageWidth: 100,
          brands: [
            {
              id: 1,
              name: "KeepCup",
              linkTo: 'https://keepcup.com'
            },
            {
              id: 2,
              name: "Stojo",
              linkTo: 'https://stojo.co'
            },
            {
              id: 3,
              name: "rCup",
              linkTo: 'https://www.rcup.co.uk'
            }
          ]
        },
        {
          id: 5,
          name: "Straws and Cutlery",
          image: 'img/tip5_illustrations/tip5_cutlery.svg',
          imageWidth: 100,
          brands: [
            {
              id: 1,
              name: "Paper straws on Amazon",
              linkTo: 'https://www.amazon.co.uk/s/ref=nb_sb_noss_1?url=search-alias%3Dkitchen&field-keywords=paper+straws'
            },
            {
              id: 2,
              name: "Net Zero Straw",
              linkTo: 'https://netzerostraw.com'
            },
            {
              id: 3,
              name: "Cutlery set by Joseph Joseph",
              linkTo: 'https://www.josephjoseph.com/en-gb/goeat-cutlery-set'
            }
          ]
        },
        {
          id: 6,
          name: "Other Alternatives",
          image: 'img/tip5_illustrations/tip5_tissues.svg',
          imageWidth: 100,
          brands: [
            {
              id: 1,
              name: "Use soap over hand-wash bottles",
              linkTo: ""
            },
            {
              id: 2,
              name: "Biodegradable bin bags",
              linkTo: 'https://www.amazon.co.uk/s/ref=nb_sb_ss_i_3_5?url=search-alias%3Dkitchen&field-keywords=biodegradable+bin+bags&sprefix=biode%2Ckitchen%2C152&crid=2FAMZME2COHMH'
            },
            {
              id: 3,
              name: "Recycled paper tissues",
              linkTo: 'https://www.amazon.co.uk/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=recycled+toilet+tissue&rh=i%3Aaps%2Ck%3Arecycled+toilet+tissue'
            }
          ]
        }
      ]
    });
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

            { this.state.productsList.map(product => {
                var brands = product.brands.map(brand => {
                  //if link is empty, render text
                  if (brand.linkTo === "") {
                    return (
                      <ul key={brand.id}>
                        <li>{brand.name}</li>
                      </ul>
                    )
                  }
                  //else render links
                  else {
                    return (
                      <ul key={brand.id}>
                        <li><a href={brand.linkTo}>{brand.name}</a></li>
                      </ul>
                    )
                  }
                });
                return (
                  <div className="tip5-product-list">
                    <div key={product.id}>
                      <img src={product.image} alt={product.name} width={product.imageWidth}/>
                    </div>
                    <div key={product.id}>
                      <b>{product.name}:</b>
                        {brands}
                    </div>
                  </div>
                )
              })
            }
        </div>

        <Navigation linkToPrevTip={this.state.linkToPrevTip} linkToNextTip={this.state.linkToNextTip}/>
      </div>
    );
  }
}

export default Tip5;
