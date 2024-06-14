import React, { useState }  from 'react';
import axios from 'axios';
import SearchBar from './searchBar';
import VideoList from './videoList';
import './App.css';

const API_KEY=process.env.REACT_APP_YOUTUBE_API_KEY;


function App() {
  const [video,setVideos]=useState([]);

  const onTermSubmit=async(term)=>{
    const response=await axios.get('https://www.googleapis.com/youtube/v3/search',{params:{
      part:'snippet',
      maxResult:5,
      key:API_KEY,
      q:term,
    },
  }) ;
  setVideos(response.data.items);
};
  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit}/>
     <VideoList videos={video}/>
    </div>
  );
}

export default App;
