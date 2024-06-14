import React from "react";
import ReactPlayer from "react-player";
function VideoItem({video}){
    const videoUrl=`https://youtube.com/watch?v=${video.id.videoId}`;

    return(
        <div className="item video-item">
           <ReactPlayer url={videoUrl} controls={true } className="mb-4" />
           <div className="content">
            <div className="header">
                {video.snippet.title}
            </div>
           </div>
        </div>
    );
}

export default VideoItem;