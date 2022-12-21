import {Router} from "express";
import cControlador from "../controlador/CControlador";

class CRuta{
    public apiRutaC:Router;

    constructor(){
        this.apiRutaC=Router();
        this.cargarRutas();
    }

    public cargarRutas():void{
        this.apiRutaC.get("/all",cControlador.obtenerCine);
        this.apiRutaC.post("/add",cControlador.crearCine);
        
        this.apiRutaC.get("/one/:codCine",cControlador.obtenerCinee);
        this.apiRutaC.put("/update/:codCine",cControlador.editarCine);
        this.apiRutaC.delete("/delete/:codCine",cControlador.eliminarCine);
        
    }
}

const cRuta = new CRuta();
export default cRuta.apiRutaC;