import React, { Component} from "react";
import "./index.css";

class Player extends Component{
  render(){
    return(
      <div className="player">
        <p></p>
        <audio id="audioController" className="hidden" controls="controls" autoPlay={true}>
          <source id="audioSource" src="" type="audio/ogg" />
        </audio>
        <p className="nowPlaying"><span id="artistPlaying"></span><span id="songPlayingNow"></span></p>        
      </div>
    );
  }
}

export default Player;