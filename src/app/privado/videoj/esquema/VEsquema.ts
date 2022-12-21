import {Schema, model, Types} from "mongoose";
import Video from "../entidad/Video";

const VEsquema = new Schema<Video>(
    {
        tipo:{type: String,required: true,},
        nombre:{type: String,required: true,},
        desarrollador:{type: String,required: true,},
        ao:{type: String,required: true,},
        precio:{type: String,required: true,},
        nombreImagencamisa:{type: String,required: false,},
        base64ImagenCamisa:{type: String,required: false,},

    },
    {
        versionKey:false
    }
)
export default model("Video", VEsquema, "Video");