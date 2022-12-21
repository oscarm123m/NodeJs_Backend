import {Router} from "express";
import vControlador from "../controlador/VControlador";

class VRuta{
    public apiRutaV:Router;

    constructor(){
        this.apiRutaV=Router();
        this.cargarRutas();
    }

    public cargarRutas():void{
        this.apiRutaV.get("/all",vControlador.obtenerVideo);
        this.apiRutaV.post("/add",vControlador.crearVideo);
        
    }
}

const vRuta = new VRuta();
export default vRuta.apiRutaV;