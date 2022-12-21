import { connect } from "mongoose";
import "dotenv";

const ConexionBD = () => {
      const URL = String(process.env.URL_MONGO);

      connect(URL).then(()=>{
        console.log("Conexion Establecida con ", URL);

      }).catch((miErrosito)=>{
        console.log(miErrosito);
      });
};

export default ConexionBD; 