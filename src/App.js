import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MainArea_Browse from './components/MainArea_Browse';
import MainArea_Content from './components/MainArea_Content';
import Dev_City from './components/Dev_City';
import Dev_Country from './components/Dev_Country';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import firebase from 'firebase';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {master:{countries:[]}};

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDtsIqIYszV8V10D6aRANCttXJvR8dqNlg",
      authDomain: "makan-yok.firebaseapp.com",
      databaseURL: "https://makan-yok.firebaseio.com",
      projectId: "makan-yok",
      storageBucket: "makan-yok.appspot.com",
      messagingSenderId: "826360915866"
    };

    firebase.initializeApp(config);
    firebase.database().ref('/').on('value', (snapshot) => {
        this.setMasterData(snapshot.val());
    });
  }

  setMasterData = (data) => {
    var obj = data

    for(var i = 0; i < obj.countries.length; i++){
      if(!obj.countries[i].cities){
        obj.countries[i].cities = [];
      }
    }

    this.setState((prevState, props) => {
      return {master: obj};
    });

    console.log(this.state.master);
  }

  addCountry = (countryData) => {
    for(var i = 0; i < this.state.master.countries.length; i++){
      if(countryData.id == this.state.master.countries[i].id) return false;
    }
    this.state.master.countries.push(countryData);

    firebase.database().ref('/').set(this.state.master);
  }

  addCity = (cityData) => {
    console.log("SACJKNACNKSNAc");
    var countryIndex = -1;
    for(var i = 0; i < this.state.master.countries.length; i++){
      if(cityData.countryid === this.state.master.countries[i].id){
        countryIndex = i;
        break;
      }
    }

    if(countryIndex === -1){
      alert("Invalid Country ID");
      return;
    }
    this.state.master.countries[countryIndex].cities.push(cityData);
    firebase.database().ref('/').set(this.state.master);
    alert("City Added!");
  }


  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" render={() => <MainArea_Browse master={this.state.master}/>} />
          <Route path="/:id" render={({ match }) => <MainArea_Content master={this.state.master} match={match}/>} />
          <Route path="/dev/city" render={() => <Dev_City addCity={this.addCity}/>} />
          <Route path="/dev/country" render={() => <Dev_Country db={firebase} addCountry={this.addCountry}/>} />
        </div>
      </Router>
    );
  }
}

export default App;
