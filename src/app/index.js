import React, { Component} from "react";
import "./index.css";
import Player from "../player";
import Search from "../search";

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="siteWrapper">
      <div className="topWrapper">
          <h1 className="title">SC PULSE <img className="headerPulseLogo" src="https://cdn0.iconfinder.com/data/icons/wellness-life/500/wellness-healthy-healthcare_9-512.png"></img></h1>
          <p className="subTitle">Soundcloud Pulse Player</p>
          <Player />          
          <hr className="break hidden" />
      </div>

      <Search />
    </div>
    );
  }
}

export default App;