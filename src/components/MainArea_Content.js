import React, { Component } from 'react';
import Entry from './Entry';

class MainArea_Content extends Component {
  render(props) {
    var cityIndex = -1;
    var countryIndex = -1;
    if(this.props.master)
      console.log(this.props.master);
      for(var i = 0; i < this.props.master.countries.length; i++){
        for(var j = 0; j < this.props.master.countries[i].cities.length; j++){
          if(this.props.master.countries[i].cities[j])
            if(this.props.match.params.id === this.props.master.countries[i].cities[j].cityid){
              cityIndex = j;
              countryIndex = i;
            }
        }
      }

    if(cityIndex === -1 || countryIndex ===-1) return (<div className="MainArea"></div>);
    console.log(cityIndex + " " + countryIndex);

    return (
      <div className="MainArea">
        <div>
          <h1 className="city-title">{this.props.master.countries[countryIndex].cities[cityIndex].city}</h1>
          <h2 className="city-author">{"by " + this.props.master.countries[countryIndex].cities[cityIndex].author + " " + this.props.master.countries[countryIndex].cities[cityIndex].emoji}</h2>
          <div className="hashtag">#mustgo</div>
          {this.props.master.countries[countryIndex].cities[cityIndex].foodArray1.map(items => <Entry data={items}/>)}
          <div className="hashtag">#goodfood</div>
          {this.props.master.countries[countryIndex].cities[cityIndex].foodArray2.map(items => <Entry data={items}/>)}
          <div className="space"></div>
        </div>
      </div>
    );
  }
}

export default MainArea_Content;
