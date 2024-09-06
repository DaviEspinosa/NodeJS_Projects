import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function middleware(request){
    const token = request.headers.get('Authorization')?.split
}