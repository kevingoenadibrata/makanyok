import React, { Component } from 'react';
import Entry from './Entry';

class Dev_Country extends Component {
  constructor(props){
    super(props);

    this.state = {
      emoji: "",
      name: "",
      id: "",
      password: "",
      db: props.db,
      addC: props.addCountry
    }
    console.log(props);
  }



  getData = () =>{
    this.state.db.database().ref('countries').on('value', function(snapshot){
        console.log(snapshot.val());
    });
  }
  
  submitFunc = () => {
    const countryObj = {
      emoji: this.state.emoji,
      name: this.state.name,
      id: this.state.id,
      cities: []
    }

    this.state.addC(countryObj);
  }

  render() {

    return (
      <div className="MainArea">
        <h1 className="city-title">👨🏻‍💻 Dev Page - Add a Country</h1>
        <input className="input" placeholder="country name" onChange={(e) => this.state.name = e.target.value} ></input>
        <input className="input" placeholder="emoji" onChange={(e) => this.state.emoji = e.target.value}></input>
        <input className="input" placeholder="country id" onChange={(e) => this.state.id = e.target.value}></input>
        <input className="input" type="password" placeholder="password" onChange={(e) => this.state.password = e.target.value}></input>
        <div className="button" onClick={this.submitFunc}>Submit</div>
        <div className="button" onClick={this.getData}>Console.log(db)</div>
      </div>
    );
  }
}

export default Dev_Country;
