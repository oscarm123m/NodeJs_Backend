import {Router} from "express";
import accesoControlador from "../controlador/AccesoControlador";

class AccesoRuta {
    public apiRutaAcceso: Router;

    constructor(){
        this.apiRutaAcceso = Router();
        this.cargarRutas();
    }

    public cargarRutas(){
        this.apiRutaAcceso.post("/signin", accesoControlador.accederSistema);
    }
}
const accesoRuta = new AccesoRuta();
export default accesoRuta.apiRutaAcceso;