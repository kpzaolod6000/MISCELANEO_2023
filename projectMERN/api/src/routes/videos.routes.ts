import {Router} from "express";
const router = Router();

import * as VideoCrontoller from "./videos.controller";

router.get('/videos',VideoCrontoller.readVideos);

router.get('/videos/:id',VideoCrontoller.readVideo);

router.post('/videos',VideoCrontoller.createVideos);

router.delete('/videos/:id',VideoCrontoller.deleteVideos);

router.put('/videos/:id',VideoCrontoller.updateVideos);

export default router;