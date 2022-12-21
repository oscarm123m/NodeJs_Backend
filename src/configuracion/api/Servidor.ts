import  express  from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import ConexionBD from "../conexion/ConexionBD";

// rutas servicios publico

import apiRutaRegistro from "../../app/publico/registro/ruta/RegistroRuta";
import apiRutaAcceso from "../../app/publico/acceso/ruta/AccesoRuta";

// rutas servicios

import apiRutaPerfil from '../../app/privado/perfil/ruta/PerfilRuta';
import apiRutaUsuario from '../../app/privado/usuario/ruta/UsuarioRuta';
import apiRutaH from '../../app/privado/ham/ruta/HRuta';
import apiRutaV from '../../app/privado/videoj/ruta/VRuta';
import apiRutaL from '../../app/privado/libro/ruta/LRuta';

import apiRutaCiudad from '../../app/privado/ciudad/ruta/CiudadRuta';
import apiRutaEmpresa from '../../app/privado/empresa/ruta/EmpresaRuta';
import apiRutaC from '../../app/privado/cine/ruta/CRuta';


// la seguridad 

import seguridad from "../../middleware/Seguridad";

class Servidor {
    public app: express.Application;

    constructor(){
        this.app = express();
        dotenv.config({path:".env"});
        ConexionBD();

        this.inicializarServidor();
        this.activarRutas();
    }

    public inicializarServidor():void{
        this.app.set("PORT",3500);
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json({limit:'10mb'}));
        this.app.use(express.urlencoded({
            extended:true,
        })
        );
    }

    public activarRutas():void{

        // rutas publicas
        this.app.use("/api/public/register", apiRutaRegistro);
        this.app.use("/api/public/access" , apiRutaAcceso);

        // rutas privadas
        this.app.use('/api/private/profile', seguridad.verificarToken, apiRutaPerfil)
        this.app.use('/api/private/usuario', seguridad.verificarToken, apiRutaUsuario)
        this.app.use('/api/private/ham', seguridad.verificarToken, apiRutaH)
        this.app.use('/api/private/vid', seguridad.verificarToken, apiRutaV)
        this.app.use('/api/private/lib', seguridad.verificarToken, apiRutaL)


        this.app.use('/api/private/ciudad', seguridad.verificarToken, apiRutaCiudad)
        this.app.use('/api/private/empresa', seguridad.verificarToken, apiRutaEmpresa)
        this.app.use('/api/private/cin', seguridad.verificarToken, apiRutaC)
        
    }

    public iniciarServidor():void{
        this.app.listen(
            this.app.get("PORT"),()=>{
                const puerto = this.app.get("PORT");
                console.log("Servidor local desplegado en el puerto",puerto);
            });
    }
}
export default Servidor;