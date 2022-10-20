import React from 'react';
import './Playlist.css';
import { TrackList } from '../TrackList/TrackList';

export class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }
  
  render() {
    return (
      <div className="Playlist">
        <input onChange={this.handleNameChange}
               defaultValue={'New Playlist'}/>
        <TrackList tracks={this.props.playlistTracks}
                   onRemove={this.props.onRemove} 
                   isRemoval={true} 
                   onChange={this.handleNameChange} />
        <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
      </div>
    );
  }

  handleNameChange(e) {
    let name = e.target.value; 
    this.props.onNameChange(name);
  }
}
