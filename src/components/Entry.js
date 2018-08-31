import React, { Component } from 'react';

class Entry extends Component {
  render(props) {
    return (
      <div className="Entry">
        <a className="name top" href={this.props.data.link} target="_blank">{this.props.data.name}</a>
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
