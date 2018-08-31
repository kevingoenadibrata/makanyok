import React, { Component } from 'react';
import Entry from './Entry';

class Dev_City extends Component {
  constructor(props){
    super(props);

    this.state = {
      author: "",
      emoji: "",
      city: "",
      cityid: "",
      countryid: "",
      password: "",
      fileData: [],
      foodArray1: [],
      foodArray2: [],
      addC: props.addCity
    }
    console.log(this.state);
  }

  submitFunc = () => {
    const cityObj = {
      author: this.state.author,
      emoji: this.state.emoji,
      city: this.state.city,
      cityid: this.state.cityid,
      countryid: this.state.countryid,
      foodArray1: this.state.foodArray1,
      foodArray2: this.state.foodArray2
    }

    this.state.addC(cityObj);
  }

  processFile = (target) => {
    var files = target.files;
    if (window.FileReader) {
  		// FileReader are supported.
      var name = target.value.split('\\').pop();
      var filename = name.substring(0, name.indexOf('.'));

  		this.getAsText(files[0]);
  	}
    else {
  		alert('FileReader are not supported in this browser.');
  	}
  }

  getAsText = (fileToRead) => {
  	var reader = new FileReader();
  	// Handle errors load
  	reader.onload = this.loadHandler;
  	reader.onerror = this.errorHandler;
  	// Read file into memory as UTF-8
  	reader.readAsText(fileToRead);
  }

  loadHandler = (event) => {
  	var csv = event.target.result;
  	this.processData(csv);
  }

  errorHandler = (evt) => {
  	if(evt.target.error.name == "NotReadableError") {
  		alert("Cannot read file !");
  	}
  }

  processData = (csv) => {
    var allTextLines = csv.split(/\r\n|\n/);

    while (allTextLines.length) {
      this.state.fileData.push(allTextLines.shift().split('\t'));
    }
    this.state.fileData.shift();
    this.state.fileData.shift();
  	console.log(this.state.fileData);
    this.createObject();
  }

  createObject = () =>{
    var foodArr = [];
    var foodArr2 = [];
    var lastIndex = -1;
    for(var i = 0; i < this.state.fileData.length; i++){
      if(this.state.fileData[i][0] == ""){
        lastIndex = i;
        break;
      }

      foodArr.push({
        name: this.state.fileData[i][0],
        cuisine: this.state.fileData[i][1],
        price: this.state.fileData[i][2],
        desc: this.state.fileData[i][4],
        link: this.state.fileData[i][3]
      });
    }

    for(var i = lastIndex+1; i < this.state.fileData.length; i++){
      foodArr2.push({
        name: this.state.fileData[i][0],
        cuisine: this.state.fileData[i][1],
        price: this.state.fileData[i][2],
        desc: this.state.fileData[i][4],
        link: this.state.fileData[i][3]
      });
    }

    this.state.foodArray1 = foodArr;
    this.state.foodArray2 = foodArr2;

    console.log(this.state);
  }

  render() {

    return (
      <div className="MainArea">
        <h1 className="city-title">👨🏻‍💻 Dev Page - Add a City</h1>
        <input className="input" placeholder="author" onChange={(e) => this.state.author = e.target.value} ></input>
        <input className="input" placeholder="emoji" onChange={(e) => this.state.emoji = e.target.value}></input>
        <input className="input" placeholder="city" onChange={(e) => this.state.city = e.target.value}></input>
        <input className="input" placeholder="city id" onChange={(e) => this.state.cityid = e.target.value}></input>
        <input className="input" placeholder="country id" onChange={(e) => this.state.countryid = e.target.value}></input>
        <input className="input" type="password" placeholder="password" onChange={(e) => this.state.password = e.target.value}></input>
        <input className="input" type="file" accept=".tsv" onChange={(e) => {this.processFile(e.target)}}></input>
        <div className="button" onClick={this.submitFunc}>Submit</div>
      </div>
    );
  }
}

export default Dev_City;
