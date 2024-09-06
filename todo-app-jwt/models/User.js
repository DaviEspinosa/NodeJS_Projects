import mongoose from "mongoose";
import bcrypt from "bcrypt";
import next from "next";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true

    }
});

//Chamar criptografia (préSchema)
UserSchema.pre("save", async function (next){
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

UserSchema.methods.comparePassword = function (candidatePassword){
    return bcrypt.compare(candidatePassword, this.password);
}

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;