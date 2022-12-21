import {Router} from "express";
import perfilControlador from "../controlador/PerfilControlador";

class PerfilRuta{
    public apiRutaPerfil:Router;

    constructor(){
        this.apiRutaPerfil=Router();
        this.cargarRutas();
    }

    public cargarRutas():void{
        this.apiRutaPerfil.get("/all",perfilControlador.obtenerPerfiles);
        this.apiRutaPerfil.get("/one/:codPerfil",perfilControlador.obtenerPerfil);
        this.apiRutaPerfil.post("/add",perfilControlador.crearPerfil);
        this.apiRutaPerfil.delete("/delete/:codPerfil",perfilControlador.eliminarPerfil);
        this.apiRutaPerfil.put("/update/:codPerfil", perfilControlador.editarPerfil);
    }
}

const perfilRuta = new PerfilRuta();
export default perfilRuta.apiRutaPerfil;