import React, { useEffect, useState } from 'react';
import { VideoInterface } from './VideoInterface';
import { getVideos } from './VideoService';
import VideoItem from './VideoItem';

function VideoList() {

  const [videos, setVideos] = useState<VideoInterface[]>([])

  const loadVideos = async () => {
    const res = await getVideos();

    const formatVideos = res.data.map((video) => {
      return{
        ...video,
        createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
        updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date()
      }
    }).sort((a,b) => b.createdAt.getTime() - a.createdAt.getTime());

    setVideos(formatVideos);
    // return new Promise(async (resolve,reject) => {
    //   try {
    //     const res = await axios.get("http://localhost:5000/videos")

    //     resolve("ok");
    //   } catch (error) {
    //     reject(error);
    //   }
    // })
  };



  useEffect(() => {
    loadVideos()
  }, []);

  return (
    <div className='row'>
      {videos.map((video) => {
        return (<VideoItem video = {video} key={video._id}/>)
      })}
    </div>
  )
}

export default VideoList