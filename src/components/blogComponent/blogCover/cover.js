import React, { Component } from 'react';

class BlogCover extends Component {

  render() {
    return (
      <div className="blog-cover">
        <div id="cover-image" style={{ backgroundImage: "url(" + this.props.coverImage + ")" }}>
          <h4>{this.props.id}</h4>
          <h2>{this.props.title}</h2>
        </div>
      </div>
    );
  }
}

export default BlogCover;
