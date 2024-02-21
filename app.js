import express from 'express';
//import{ usuarioRouter } from './rutas/usuario.js'
import mysql from 'mysql2/promise'

const config = {
    host:'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'hakai'

}
const connection = await mysql.createConnection(config);
const app = express();
const PORT = 1234;
app.disable('x-powered-by')
//app.use('/usuarios',usuarioRouter)
app.get('/',async (req,res)=>{
    const usuarios = await connection.query('SELECT * FROM usuarios')
    if(usuarios){
        res.json(usuarios);
    }else{
        res.status(404).json({message:'Usuarios no encontrados'})
    }
})

app.listen(PORT,()=>{
    console.log('servidor corriendo en el puerto:' + PORT)
})