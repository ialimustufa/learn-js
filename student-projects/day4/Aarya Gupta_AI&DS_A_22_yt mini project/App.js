import React from 'react';
import axios from 'axios';
import VideoList from './VideoList';
import SearchBar from './SearchBar';
import'./App.css';
import {useState} from "react";


const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
function App(){
  const [video, setVideos] = useState([]);

  const onTermSubmit = async(term) => {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params:{
        part: 'snippet',
        maxResults:5,
        key: API_KEY,
        q: term,
      },

    });
    setVideos(response.data.items);
  };
  return(
    <div className="ui container"> 
    <SearchBar onFormSubmit={onTermSubmit} />
    <VideoList videos= {video}/>
    </div>
  )
}

export default App;