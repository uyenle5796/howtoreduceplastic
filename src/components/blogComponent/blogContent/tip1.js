import React, { Component } from 'react';
import BlogCover from '../blogCover/cover.js';
import Pagination from '../blogPagination/pagination.js';

class Tip1 extends Component {

  constructor() {
    super();

    this.state = {
      id : 1,
      title : "Say No to Single-Use Plastic",
      image : 'img/tip1_cover.svg',

      linkTo : '/tip2',
      nextTipid : 2,
      nextTipTitle : "Bring Your Own Reusables"
    };
  }

  render() {
    return (
      <div>
        <BlogCover id={this.state.id} title={this.state.title} coverImage={this.state.image}/>

        <div className="post-content">
          <p>Single-use plastics are used only once and thrown right away after. They are commonly used as:</p>
            <ul>
              <li>Shopping bags</li>
              <li>Coffee cups</li>
              <li>Straws</li>
              <li>Cutlery</li>
              <li>Prepared food containers</li>
            </ul>
          <p>and more.</p>

          <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
          </p>
        </div>

        <Pagination linkTo={this.state.linkTo} id={this.state.nextTipid} title={this.state.nextTipTitle}/>
      </div>
    );
  }
}

export default Tip1;
