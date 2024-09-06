import User from "@/models/User";
import connectMongo from "@/utils/dbConnection";
import { NextResponse } from "next/server";

export async function POST(request) {
    const data = await request.json();
    await connectMongo();
    try {
        const user = User.create(data);
        return NextResponse.json({success:true,  data:user});
    } catch (error) {
        return NextResponse.json({success:false}, {status:400});
    }
}