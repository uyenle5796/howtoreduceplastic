import React, { Component } from 'react';

class BlogCover extends Component {
  
  render() {
    return (
      <div className="blog-cover">
        <div style={{ backgroundImage: "url(" + this.props.coverImage + ")" }}>
          <h4>{this.props.id}</h4>
          <h1>{this.props.title}</h1>
        </div>
      </div>
    );
  }
}

export default BlogCover;
