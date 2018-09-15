import React, { Component } from 'react';

class Tip extends Component {

  render() {
    return (
      <div className="tip">
            <div style={ { backgroundImage: "url(" + this.props.obj.image + ")" } }>
              <h2>{(this.props.obj.id)}</h2>
              <p>{this.props.obj.name}</p>
            </div>
      </div>
    );
  }
}

export default Tip;
