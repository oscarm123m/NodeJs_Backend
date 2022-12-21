import {Router} from "express";
import lControlador from "../controlador/LControlador";

class LRuta{
    public apiRutaL:Router;

    constructor(){
        this.apiRutaL=Router();
        this.cargarRutas();
    }

    public cargarRutas():void{
        this.apiRutaL.get("/all",lControlador.obtenerLibros);
        this.apiRutaL.get("/one/:codLibro",lControlador.obtenerLibro);
        this.apiRutaL.post("/add",lControlador.crearLibro);
        this.apiRutaL.delete("/update/:codLibro",lControlador.editarLibro);
        this.apiRutaL.put("/delete/:codLibro",lControlador.eliminarLibro);
        
    }
}

const lRuta = new LRuta();
export default lRuta.apiRutaL;