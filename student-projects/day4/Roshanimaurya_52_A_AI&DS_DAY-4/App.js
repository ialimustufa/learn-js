// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import './App.css';


const API_KEY =process.env.REACT_APP_YOUTUBE_API_KEY;


function App() {
   const [videos, setVideos] = useState([]);


   const onTermSubmit = async (term) => {
       const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
           params: {
               part: 'snippet',
               maxResults: 5,
               key: API_KEY,
               q: term,
           },
       });


       setVideos(response.data.items);
   };


   return (
       <div className="ui container">
           <SearchBar onFormSubmit={onTermSubmit} />
           <VideoList videos={videos} />
       </div>
   );
}


export default App;


