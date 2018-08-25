import React, { Component } from 'react';
import Entry from './Entry';

class MainArea_Content extends Component {
  render(props) {
    const tempData = {
      name: 'Gyukaku',
      cuisine: 'Japanese BBQ',
      desc: 'Decent priced japanese bbq. go at happy hour to get cheap prices.',
      price: '$$'
    }

    const tempData2 = {
      name: 'Sweet Chick',
      cuisine: 'Brunch',
      desc: 'Chicken & Waffles. So good. Mac n cheese is nice and the waffles have different & interesting flavors. should try apple cinnamon or rosemary mushroom',
      price: '$'
    }
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
          <h1 className="city-title">{this.props.master.countries[countryIndex].cities[cityIndex].emoji + " " + this.props.master.countries[countryIndex].cities[cityIndex].city}</h1>
          <div className="hashtag">#mustgo</div>
          {this.props.master.countries[countryIndex].cities[cityIndex].foodArray1.map(items => <Entry data={items}/>)}
          <div className="hashtag">#goodfood</div>
          {this.props.master.countries[countryIndex].cities[cityIndex].foodArray2.map(items => <Entry data={items}/>)}
        </div>
      </div>
    );
  }
}

export default MainArea_Content;
