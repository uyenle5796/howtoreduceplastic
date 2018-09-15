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

      nextTipid : 2,
      nextTipTitle : "Bring Your Own Reusables"
    }
  }

  render() {
    return (
      <div>
        <BlogCover id={this.state.id} title={this.state.title} coverImage={this.state.image}/>

        <article>
            <p>Single-use plastics are used only once and thrown right away after. They are commonly used as:</p>
              <ul>
                <li>Shopping bags</li>
                <li>Coffee cups</li>
                <li>Straws</li>
                <li>Cutlery</li>
                <li>Prepared food containers</li>
              </ul>
            <p>and more.</p>
        </article>

        <Pagination id={this.state.nextTipid} title={this.state.nextTipTitle}/>
      </div>
    );
  }
}

export default Tip1;
