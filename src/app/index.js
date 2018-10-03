import React, { Component} from "react";
import "./index.css";
import Player from "../player";
import Search from "../search";
import styled from 'styled-components';
import { device } from '../utilities/devices';

const Heading = styled.h1`
  font-weight: 300;
  font-size: 3rem;

  @media ${device.tablet} {
    font-size: 4rem;
  }
`;

const SiteWrapper = styled.div`
  margin: 10%;
`;

const SubTitle = styled.p`
  margin: 0;
  font-size: 1.2rem;
`

const TrackWrapper = styled.div`
  width: 100%;
  margin: 0 2% 8% 2%;
  text-align: center;
  @media ${device.mobileL} {
    
  }
`

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
`

class App extends Component{
  constructor(props){
    super(props);
    this.handleTrackPlaying = this.handleTrackPlaying.bind(this);
    this.state = {
      trackPlaying: false,
      currentTrack: {}
    }
  }

  handleSearch(e) {
  }
  handleTrackPlaying(track) {
    this.setState({trackPlaying: true, currentTrack: track});
  }

  render(){
    return(
      <SiteWrapper>
        <TopWrapper>
          <Heading>
            SC PULSE <img className="Heading__Logo" src="https://cdn0.iconfinder.com/data/icons/wellness-life/500/wellness-healthy-healthcare_9-512.png"></img>
          </Heading>
          <SubTitle>Soundcloud Pulse Player</SubTitle>
          {this.state.trackPlaying && <Player track={this.state.currentTrack} />}
        </TopWrapper>
        <Search onTrackPlay={this.handleTrackPlaying}  />
    </SiteWrapper>
    );
  }
}

export default App;