import axios from 'axios'
import { VideoInterface } from './VideoInterface';

const API = "http://localhost:5000";

export const getVideos = ( async () => {
    return await axios.get<VideoInterface[]>(`${API}/videos`);
})

export const creatVideo = (async (video : VideoInterface) => {
    return await axios.post(`${API}/videos`,video);
})

export const getVideoApi = ( async (id:string) => {
    return await axios.get<VideoInterface>(`${API}/videos/${id}`);
})

export const updateVideo = ( async (id:string, video:VideoInterface) => {
    return await axios.put<VideoInterface>(`${API}/videos/${id}`, video);
})