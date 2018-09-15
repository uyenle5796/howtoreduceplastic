import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Tip extends Component {

  render() {
    return (
      <div className="tip">
        <Link to={this.props.obj.linkTo}>

          <div style={ { backgroundImage: "url(" + this.props.obj.image + ")" } }>
            <h2>{(this.props.obj.id)}</h2>
            <p>{this.props.obj.name}</p>
          </div>
          
        </Link>
      </div>
    );
  }
}

export default Tip;
