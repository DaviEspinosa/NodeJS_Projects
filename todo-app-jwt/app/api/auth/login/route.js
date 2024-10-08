import User from "@/models/User"
import connectMongo from "@/utils/dbConnection"
import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"

export async function POST(request){
    const {email, password} = await request.json();
    await connectMongo();

    try{
        const user = await User.findOne({email});

        if (user && (await user.comparePassword(password))) {
            const token = jwt.sign({userId: user._id},
                process.env.JWT_SECRET, {expiresIN: '1h'}
            );
            return NextResponse.json({token});
        }
        else{
            // erro de acesso
            return NextResponse.json({succes: false}, {status:400});
        }
    }catch(err){
        return NextResponse.json({success:false}, {status:404});
    }
}