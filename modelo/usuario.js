import mysql from 'mysql2/promise'

const config = {
    host:'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'hakai'

}

const connection = await mysql.createConnection(config);
export class Usuario{

static async getAll(){
    const result = await connection.query('SELECT * FROM usuarios')

    if(result){
        return result;
    }else{
        return null;
    }
}

}