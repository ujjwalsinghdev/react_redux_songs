import React from "react"
import SongList from "./SongList"
import SongDetail from "./SongDetail"

const App = () => {
  return (
    <div className="ui container">
      <SongList></SongList>
      <SongDetail></SongDetail>
    </div>
  )
}

export default App
