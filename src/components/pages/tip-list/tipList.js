import React, { Component } from "react";
import Tip from "./tip/tip.js";

class TipList extends Component {
  constructor() {
    super();

    this.state = {
      tips: []
    };
  }

  componentDidMount() {
    this.getTips();
  }

  getTips() {
    this.setState({
      tips: [
        {
          id: 1,
          name: "Say No to Single-Use Plastic",
          image: "img/tip1_square.svg",
          linkTo: "/tip1"
        },
        {
          id: 2,
          name: "Bring Your Own Reusables",
          image: "img/tip2_square.svg",
          linkTo: "/tip2"
        },
        {
          id: 3,
          name: "Buy Without Plastic Packaging",
          image: "img/tip3_square.svg",
          linkTo: "/tip3"
        },
        {
          id: 4,
          name: "Buy in Bulk",
          image: "img/tip4_square.svg",
          linkTo: "/tip4"
        },
        {
          id: 5,
          name: "Choose Eco-friendly Alternatives",
          image: "img/tip5_square.svg",
          linkTo: "/tip5"
        },
        {
          id: 6,
          name: "Volunteer",
          image: "img/tip6_square.svg",
          linkTo: "/tip6"
        },
        {
          id: 7,
          name: "Sort Your Rubbish and Recycle at Nearest Recycling Centre",
          image: "img/tip7_square.svg",
          linkTo: "/tip7"
        },
        {
          id: 8,
          name: "Write to Businesses",
          image: "img/tip8_square.svg",
          linkTo: "/tip8"
        },
        {
          id: 9,
          name: "Sign Petitions",
          image: "img/tip9_square.svg",
          linkTo: "/tip9"
        },
        {
          id: 10,
          name: "Educate Yourself",
          image: "img/tip10_square.svg",
          linkTo: "/tip10"
        },
        {
          id: 11,
          name: "Stay Informed",
          image: "img/tip11_square.svg",
          linkTo: "/tip11"
        },
        {
          id: 12,
          name: "Donate to Charities",
          image: "img/tip12_square.svg",
          linkTo: "/tip12"
        },
        {
          id: 13,
          name: "Bin Your Gum & Butts!",
          image: "img/grey.jpg",
          linkTo: "/tip13"
        },
        {
          id: 14,
          name: "Change Your Washing",
          image: "img/grey.jpg",
          linkTo: "/tip14"
        },
        {
          id: 15,
          name: "Hey Girls, Free Your Period from Plastic!",
          image: "img/grey.jpg",
          linkTo: "/tip15"
        }
      ]
    });
  }

  render() {
    return (
      <div className="tips-content">
        <div className="tips-list">
          {this.state.tips.map((tip, index) => (
            <Tip key={index} obj={tip} />
          ))}
        </div>

        <h4 className="instagram-profile-title">@HOWTOREDUCEPLASTIC</h4>
        <iframe
          src="https://cdn.lightwidget.com/widgets/7cb731569b1f5f35a28cc0aa101846f2.html"
          scrolling="no"
          allowtransparency="true"
          className="lightwidget-widget"
          style={{ width: "80%" }}
        ></iframe>
      </div>
    );
  }
}

export default TipList;
