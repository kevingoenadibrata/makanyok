import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MainArea_Browse extends Component {

  constructor(props){
    super(props);
  }

  render(props) {
    return(
      <div className="MainArea browse">
        {this.props.master.countries.map(
              (items) =>{
                return (
                  <div>
                    <h1 className="city-title">{items.emoji + " " + items.name}</h1>
                    {items.cities.map(cit => <Link to={"/" + cit.cityid} className="city">{cit.city}</Link>)}
                  </div>
                );
              }
        )}
      </div>
    );
  }
}

export default MainArea_Browse;
