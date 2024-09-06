import mongoose from "mongoose";

const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
    throw new Error("Errooor ao preencher .env");
    
}

const connectMongo = async()=>{
    if (mongoose.connection.readyState>0){
        return;
    }
    else{
        return await mongoose.connect(databaseUrl).then("MongoDB Conectado")
        .catch(err=>console.error(err));
    }
}

export default connectMongo;