import {Router} from "express";
import hControlador from "../controlador/HControlador";

class HRuta{
    public apiRutaH:Router;

    constructor(){
        this.apiRutaH=Router();
        this.cargarRutas();
    }

    public cargarRutas():void{
        this.apiRutaH.get("/all",hControlador.obtenerHamburguesas);
        this.apiRutaH.post("/add",hControlador.crearHamburguesa);
        
    }
}

const hRuta = new HRuta();
export default hRuta.apiRutaH;