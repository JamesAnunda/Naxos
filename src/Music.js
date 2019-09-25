import React from 'react';


class Music extends React.Component {
    state = {
      play: false
    }
    audio = new Audio(this.props.url)
  
    togglePlay = () => {
      this.setState({ play: !this.state.play }, () => {
        this.state.play ? this.audio.play() : this.audio.pause();
      });
    }
  
    render() {
      return (
        <div>
          <button className="btn btn-info font-weight-bold text-uppercase w-100" onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
        </div>
      );
    }
  }
  
  export default Music;