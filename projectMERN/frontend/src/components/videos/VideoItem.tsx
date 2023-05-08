import React from "react";
import { VideoInterface } from "./VideoInterface";
import ReactPlayer from "react-player";
import {useNavigate} from 'react-router-dom'
import './VideoItem.css'

interface Props {
  video: VideoInterface;
}

function VideoItem({ video }: Props) {

  const navigate = useNavigate();

  const handleDelete = (e:React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    console.log("button deleted");
  }

  return (
    <div className="col-md-4 mb-4">
      <div className="card card-body video-card" onClick={() => navigate(`/update-video/${video._id}`)}>
        <div className="d-flex justify-content-between">
          <h1>{video.title}</h1>
          <span onClick={() => handleDelete(video._id)}>X</span>
        </div>

        <ReactPlayer url={video.url} width="100%"/>
        
        <h2>{video.description}</h2>
      </div>
    </div>
  );
}

export default VideoItem;
