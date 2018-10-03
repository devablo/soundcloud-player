import React from "react";
import "./index.css";
import ReactAudioPlayer from 'react-audio-player';

const CLIENTID = "TJ3pAMUCLJAGmlRHCQ3KFKIMMex3Azp3";

function getTrackUrl(track) {
  return track.stream_url + "?client_id=" + CLIENTID;
}

function Player(props) {
  if (props.track) {
    return (
        <div className="player">
          <ReactAudioPlayer
              src={getTrackUrl(props.track)}
              controls
              autoPlay
            />
          <p className="nowPlaying">
            <span id="artistPlaying">Now Playing: {props.track.user.username} </span>
            <span id="songPlayingNow">{props.track.title}</span>
          </p>
        </div>
    );
  }
}

export default Player;