import React from "react"
import { connect } from "react-redux"

const SongDetail = ({ song }) => {
  // console.log(props);
  if (!song) {
    return <div>Please Select A Song</div>
  }
  return (
    <div>
      <h2>Song Name : {song.title}</h2>
      <h3>Duration : {song.duration}</h3>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong
  }
}

export default connect(mapStateToProps)(SongDetail)
