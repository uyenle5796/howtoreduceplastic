import React, { Component } from 'react';
import Tip from './tip/tip.js'

class TipList extends Component {

  constructor(){
    super();

    this.state = {
      tips: []
    };

  }

  componentDidMount(){
    this.getTips();
  }

  getTips(){
    this.setState({
      tips: [{
          id: 1,
          name: "Say No to Single-Use Plastic",
          image: 'img/tip1_square.svg'
        },
        {
          id: 2,
          name: "Bring Your Own Reusables",
          image: 'img/tip2_square.svg'
        },
        {
          id: 3,
          name: "Buy Without Plastic Packaging",
          image: 'img/tip3_square.svg'
        },
        {
          id: 4,
          name: "Buy in Bulk",
          image: 'img/tip4_square.svg'
        },
        {
          id: 5,
          name: "Choose Eco-friendly Alternatives",
          image: 'img/tip5_square.svg'
        },
        {
          id: 6,
          name: "Volunteer",
          image: 'img/tip6_square.svg'
        },
        {
          id: 7,
          name: "Sort Your Rubbish and Recycle at Nearest Recycling Centre",
          image: 'img/tip7_square.svg'
        },
        {
          id: 8,
          name: "Write to Businesses",
          image: 'img/tip8_square.svg'
        },
        {
          id: 9,
          name: "Sign Petitions",
          image: 'img/tip9_square.svg'
        },
        {
          id: 10,
          name: "Educate Yourself",
          image: 'img/tip10_square.svg'
        },
        {
          id: 11,
          name: "Stay Informed",
          image: 'img/tip11_square.svg'
        },
        {
          id: 12,
          name: "Spread the Message!",
          image: 'img/tip12_square.svg'
        }
      ]
    });
  }

  render() {
    return (
      <div className="tips-list">
        {
          this.state.tips.map((tip, index) => <Tip key={index} obj={tip}/>)
        }
      </div>
    );
  }
}

export default TipList;
