import { Router } from "express";
import registroControlador from "../controlador/RegistroControlador";

class RegistroRuta{
    public apiRutaRegistro: Router;

    constructor(){
        this.apiRutaRegistro = Router();
        this.cargarRutas();
    }

    public cargarRutas(){
       this.apiRutaRegistro.post("/signup", registroControlador.registrarUsuario);
    }
}

const registroRuta = new RegistroRuta();
export default registroRuta.apiRutaRegistro;