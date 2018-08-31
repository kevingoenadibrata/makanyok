import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <Link to="/" className="title">🐙 Makan Yok!</Link>
        <p className="desc"> Makan Yok is a collaborative food guide powered by the community. We try our best to brew the lists to match your tastebuds. Currently, we are actively seeking content writers to provide various food lists for our viewers.</p>
      </div>
    );
  }
}

export default NavBar;
