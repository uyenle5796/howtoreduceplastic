import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {

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
          name: "Ditch single-use plastic",
          image: 'img/sea-and-starfish.jpg'
        },
        {
          name: "Bring your own reusables"
        },
        {
          name: "Buy without plastic packaging"
        },
        {
          name: "Buy in bulk"
        },
        {
          name: "Say no to plastic and styrofoam when offered"
        },
        {
          name: "Volunteer"
        },
        {
          name: "Sort your rubbish and recycle at nearest recycling centre"
        },
        {
          name: "Write to your supermarket CEOs"
        },
        {
          name: "Spread the message!"
        }
      ]
    });
  }

  render() {
    return (
      <div className="tips-list">
        {
          this.state.tips.map((tip, index) =>
            <div key={index++} style={ { backgroundImage: "url(" + tip.image + ")" } }>
              <h2>{index}</h2>
              <p>{tip.name}</p>
            </div>)
        }
      </div>
    );
  }
}

export default HomePage;
