import {Router} from "express";
import usuarioControlador from "../controlador/UsuarioControlador";

class UsuarioRuta{
    public apiRutaUsuario:Router;

    constructor(){
        this.apiRutaUsuario=Router();
        this.cargarRutas();
    }

    public cargarRutas():void{
        this.apiRutaUsuario.get("/all",usuarioControlador.obtenerUsuarios);
        this.apiRutaUsuario.get("/one/:codUsuario",usuarioControlador.obtenerUsuario);
        this.apiRutaUsuario.post("/add",usuarioControlador.crearUsuario);
        this.apiRutaUsuario.delete("/delete/:codUsuario",usuarioControlador.eliminarUsuario);
        this.apiRutaUsuario.put("/update/:codUsuario", usuarioControlador.editarUsuario);
    }
}

const usuarioRuta = new UsuarioRuta();
export default usuarioRuta.apiRutaUsuario;