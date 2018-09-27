import React, { Component} from "react";
import "./index.css";
const soundCloudService = require('../services/soundcloud')
const APIKEY = "1e82cb59611dbc3be9760487fc7bab2d";

class Search extends Component{  
  constructor(props) {
    super(props);
    this.state = { 
      tracks: [],
      trackSearch: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.trackChange = this.trackChange.bind(this);
  }

  trackChange(event) {
    this.setState({
      trackSearch: event.target.value,
      tracks: []
    })
  };

  trackClick(track) {
    
    let element = document.querySelector("#audioController");
    element.classList.remove("hidden");
    
    let audioController = document.querySelector("#audioController");
    audioController.src = track.stream_url + "?client_id=" + APIKEY;
    audioController.load();

    document.querySelector("#artistPlaying").innerHTML = "Now Playing: " + track.user.username + " ";
    document.querySelector("#songPlayingNow").innerHTML = track.title;
  };

  handleSubmit(event) {
    event.preventDefault();
    let userInput = this.state.trackSearch;//.replace(/\s+/g, "-").toLowerCase();

    this.setState({
        query: this.state.trackSearch,
      }, () => {
        this.moveTitleUp();
        soundCloudService.Query(userInput)
        .then((data) => {
          console.log(data);
          this.setState({
            tracks: data
          });
        })
        .catch(function() {
          console.log("ErroR");
        });
      }
    );
  }
  trackImage(data) {
    if (!data || !data.artwork_url) {
      return "http://www.i-dedicate.com/media/profile_images/default.png";
    } else {
      // see difference image formats 
      // https://developers.soundcloud.com/docs/api/reference#tracks
      return data.artwork_url.replace('-large.jpg', '-crop.jpg');
    }
  }
  render(){
    return(
      <div className="search">
          <form onSubmit={this.handleSubmit}>
            <div className="searchWrapper">
                <input type="text" name="search" value={this.state.trackSearch} className="searchBar" placeholder="Artist..." onChange={this.trackChange} />
                <button className="searchBtn" value="SEARCH">SEARCH</button>
            </div>
          </form>
          <hr className="break hidden" />
          <div className="searchResultsSection">
            <h2 className="resultsTitle hidden">Search Results:</h2>
            <div className="searchResults">
              {
                this.state.tracks.map(track => (
                  <div className="trackWrapper" key={track.id} onClick={this.trackClick.bind(this, track)}>
                    <p className="playButton">PLAY</p>
                    <img className="userImg" src={this.trackImage(track)}></img>
                    <p className="songTitle">{track.title}</p>
                    <p className="userName">{track.user.username}</p>
                  </div>
                ))
              }
            </div>
          </div>
      </div>
    );
  }

  updateNowPlaying(currentArtist, currentSong){
    document.querySelector("#artistPlaying").innerHTML = "Now Playing: " + currentArtist + " ";
    document.querySelector("#songPlayingNow").innerHTML = currentSong;
  }

  clearResults() {
    var searchResultsContainer = document.querySelector(".searchResults");
    searchResultsContainer.innerHTML = "";
  }

  moveTitleUp() {
    var title = document.querySelector(".title");
    title.style.margin = "4% 0 0 0";
  }
}

export default Search;