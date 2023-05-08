import mongoose, {ConnectOptions} from "mongoose";
import config from "./config";

const moongoseOptions: ConnectOptions = {
    user: "",//config.MONGO_USER,
    pass: ""//config.MONGO_PASSWORD
}

const run = async () => {
    return await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`,moongoseOptions);
}

run()
    .then((db) => console.log("Database Connected to: " + db.connection.name))
    .catch(err => console.log("Output Error\n" + err));

// (async () =>{
//     await mongoose.connect('mongodb://127.0.0.1:27017/mern-database');
// })();
