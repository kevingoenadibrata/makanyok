import React, { Component } from 'react';

class Entry extends Component {
  render(props) {
    return (
      <div className="Entry">
        <p className="name top">{this.props.data.name}</p>
        <div className="container-bottom-align">
          <p className="cuisine top">{this.props.data.cuisine}</p>
        </div>
        <div className="container-bottom-align">
          <p className="price top">{this.props.data.price}</p>
        </div>
        <p className="desc">{this.props.data.desc}</p>
      </div>
    );
  }
}

export default Entry;
