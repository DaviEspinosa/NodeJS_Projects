import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({

    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    title:{
        type:String
    },
    status:{
        type:String,
        enum:["Pendente", "Em Progresso", "Concluído"],
        default:"Pendente"
    }

});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;