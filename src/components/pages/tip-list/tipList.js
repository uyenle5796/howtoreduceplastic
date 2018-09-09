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
          name: "Ditch single-use plastic",
          image: 'img/sea-and-starfish.jpg'
        },
        {
          id: 2,
          name: "Bring your own reusables",
          image: ''
        },
        {
          id: 3,
          name: "Buy without plastic packaging",
          image: ''
        },
        {
          id: 4,
          name: "Buy in bulk",
          image: ''
        },
        {
          id: 5,
          name: "Say no to plastic and styrofoam when offered",
          image: ''
        },
        {
          id: 6,
          name: "Volunteer",
          image: ''
        },
        {
          id: 7,
          name: "Sort your rubbish and recycle at nearest recycling centre",
          image: ''
        },
        {
          id: 8,
          name: "Write to your supermarket CEOs",
          image: ''
        },
        {
          id: 9,
          name: "Spread the message!",
          image: ''
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
