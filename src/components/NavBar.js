import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <Link to="/" className="title">🐙 Makan Yok!</Link>
        <p className="desc"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    );
  }
}

export default NavBar;
