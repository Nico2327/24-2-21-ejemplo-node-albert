import { Usuario } from "../modelo/usuario.js";
export class UsuarioController{
    static async getAll(req,res){
        const usuarios = await Usuario.getAll();
        if(usuarios){
            res.json(usuarios);
        }else{
            res.status(404).json({message:'Usuarios no encontrados'})
        }
    }
}