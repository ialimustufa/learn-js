import React from 'react';
import VideoItem from  './VideoItem';

function VideoList({videos}){
    const renderdedList=videos.map((video)=>(
        <VideoItem key={video.id.videoId} video={video}/>
    ))

    return(
        <div className='ui relaxed divided list'>
            {renderdedList}

        </div>
    );
}
export default VideoList;