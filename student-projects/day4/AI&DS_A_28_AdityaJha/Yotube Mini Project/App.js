// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import './App.css';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

function App() {
   const [videos, setVideos] = useState([]);
   const [selectedVideo, setSelectedVideo] = useState(null);

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
       setSelectedVideo(response.data.items[0]); // Select the first video by default
   };

   const onVideoSelect = (video) => {
       setSelectedVideo(video);
   };

   return (
       <div className="ui container">
           <SearchBar onFormSubmit={onTermSubmit} />
           <div className="ui grid">
               <div className="ui row">
                   <div className="eleven wide column">
                       <VideoDetail video={selectedVideo} />
                   </div>
                   <div className="five wide column">
                       <VideoList videos={videos} onVideoSelect={onVideoSelect} />
                   </div>
               </div>
           </div>
       </div>
   );
}

export default App;
