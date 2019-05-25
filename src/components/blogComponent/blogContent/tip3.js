import React, { Component } from "react";
import BlogCover from "../blogCover/cover.js";
import Navigation from "../blogNavigation/navigation.js";

class Tip3 extends Component {
  constructor() {
    super();

    this.state = {
      id: 3,
      title: "Buy Without Plastic Packaging",
      image: "img/tip3_cover.svg",
      linkToPrevTip: "tip2",
      linkToNextTip: "tip4",
      list: []
    };
  }

  componentDidMount() {
    this.getList();
  }

  getList() {
    this.setState({
      list: [
        {
          id: 1,
          title: "Unpackaged fruits and vegetables"
        },
        {
          id: 2,
          title: "Lose tea"
        },
        {
          id: 3,
          title: "Shop at zero-waste shops and food markets"
        },
        {
          id: 4,
          title: "Products in aluminium, glass or paper"
        }
      ]
    });
  }

  render() {
    return (
      <div>
        <BlogCover
          id={this.state.id}
          title={this.state.title}
          coverImage={this.state.image}
        />

        <div className="post-content">
          Many items in the supermarket can be bought without packaging,
          especially fresh produce such as fruits and vegetables, thanks to
          their own natural skin. So next time you go shopping, try to opt for{" "}
          <b>package-free versions</b>. This also helps you buy only as much as
          you need and <b>reduce food waste</b>. Some examples are:
          <br />
          <br />
          {this.state.list.map(item => {
            return (
              <ul key={item.id}>
                <li>{item.title}</li>
              </ul>
            );
          })}
          <br />
          <br />
          <img
            className="centered tip3-illustration"
            src="img/tip3_illustrations/buy_without_packaging.svg"
            alt="drawing"
          />
        </div>

        <Navigation
          linkToPrevTip={this.state.linkToPrevTip}
          linkToNextTip={this.state.linkToNextTip}
        />
      </div>
    );
  }
}

export default Tip3;
