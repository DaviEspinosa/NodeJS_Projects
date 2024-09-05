import mongoose from 'mongoose';

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
    throw new Error("Database não listado no .env");
    
}
const connectMongoDB = async()=>{
    if (mongoose.connection.readyState > 0) {
        return;
    }else{
        mongoose.connect(databaseUrl)
        .then("MongoDB Conectado")
        .catch(err=>console.error(err));
    }
} 
// ========================
// OUTRO MODO PARA CONECTAR
// ========================
// const connectMongo = async () => {
//     mongoose.connect(process.env.DATABASE_URL)//estabelecendo conexão
//     .then(() => console.log('Conectado ao MongoDB'))
//     .catch(err => console.error('Erro ao conectar ao MongoDB', err));
// }


export default connectMongoDB;