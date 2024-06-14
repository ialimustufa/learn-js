import React, { useState } from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import './App.css';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

function App(){
  const [video,setVideos] = useState([]);

  const onTermSubmit = async (term) => {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params:{
        part: 'snippet',
        maxResuts:5,
        key: API_KEY,
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return(
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit}/>
      <VideoList videos={video}/>
    </div>
  )

}

export default App;