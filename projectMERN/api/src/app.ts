import express from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./config";
import videosRoutes  from "./routes/videos.routes";

const app = express();
app.set('port',config.MONGO_PORT);

//morgan te da informacion de las peticiones
app.use(morgan('dev'));
app.use(cors());
app.use(express.json()); //entiendo la tipica peticion post con json
app.use(express.urlencoded({extended: false})); // peticion post de un formulario entiende los campos que llegan desde ahi

app.use(videosRoutes);

export default app;