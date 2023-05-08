import React, { useState, useEffect} from "react";
import { VideoInterface } from "./VideoInterface";
import {creatVideo, getVideoApi, updateVideo} from './VideoService'
import {toast} from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'

type InputChange =  React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

function VideoForm() {

  const navigate = useNavigate();
  const params = useParams();
  
  const stateInitial = {
    title: "",
    description: "",
    url: "",
  }

  const [video, setVideo] = useState<VideoInterface>(stateInitial);

  const handleChange = ((e:InputChange) => {
    setVideo({
      ...video,
      [e.target.name]: e.target.value,
    });
  })

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!params.id) {
      await creatVideo(video);
      setVideo(stateInitial);

      toast.success('New Video Added', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }else{
      await updateVideo(params.id,video);
    }
    
    navigate('/');
  }

  const getVideo = async (id:string) => {
    const res = await getVideoApi(id);
    const {title, description, url} = res.data;
    console.log(title);
    
    setVideo({title, description, url});
  }

  useEffect(()=>{
    if (params.id) getVideo(params.id)
  },[])
  
  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="title"
                  placeholder="Write a title for this video"
                  className="form-control"
                  onChange={handleChange}
                  autoFocus
                  value={video.title}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="url"
                  name="url"
                  placeholder="https://somesite.com"
                  className="form-control"
                  onChange={handleChange}
                  value={video.url}
                />
              </div>
              <div className="form-group mb-3">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="Write a description"
                  onChange={handleChange}
                  value={video.description}
                ></textarea>
              </div>
              {
                params.id ?
                  <button className="btn btn-info">Update Video</button>
                :
                  <button className="btn btn-primary">Create Video</button>
              }
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoForm;
