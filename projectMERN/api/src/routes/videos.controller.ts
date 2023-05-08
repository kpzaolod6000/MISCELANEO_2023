import { RequestHandler } from "express";
import modelVideo from "./Video";


export const createVideos: RequestHandler = async (req,res) => {
    
    const videoFound = await modelVideo.findOne({url: req.body.url});

    if (videoFound) return res.status(301).json({message: "The url already exists"});

    const video = new modelVideo(req.body);
    const savedVideo = await video.save();    
    res.json(savedVideo);
    // console.log(req.body);
    // res.json('creating videos');
}

export const readVideos: RequestHandler = async (req,res) => {
    
    try {
        const videos = await modelVideo.find();
        //res.json('getting videos');
        return res.json(videos);   
    } catch (error) {
        return res.json(error);
    }
}

export const readVideo: RequestHandler = async (req,res) => {
    
    const videoFound = await modelVideo.findById(req.params.id);
    if (!videoFound) return res.status(204).json();
    return res.json(videoFound);
    
}

export const updateVideos: RequestHandler = async (req,res) => {
    // res.json('updating videos');
    const videoUpdated = await modelVideo.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if (!videoUpdated) return res.status(204).json();
    return res.json(videoUpdated);
}

export const deleteVideos: RequestHandler = async (req,res) => {
    // res.json('deleting videos');
    const videoDelete = await modelVideo.findByIdAndDelete(req.params.id);
    if (!videoDelete) return res.status(204).json();
    return res.json(videoDelete);
}
