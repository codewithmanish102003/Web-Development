import User from "@/models/User";
import bcrypt from "bcryptjs";
import connectDB from "@/config/db";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    console.log("route hitting")
    const {username,email, password,confirmPassword} = await req.json()
    console.log(username,email,password,confirmPassword)

    try {
        await connectDB(); 

        const existingUser = await User.findOne({email});
        console.log(existingUser);
        
        if(existingUser){
            return new NextResponse(JSON.stringify({error : 'Email already exists'}), {status: 400})
        }

        const passwordHash = await bcrypt.hash(password,12);
        const newUser = await User.create({username, email, password: passwordHash});

        try {
            await newUser.save();
            return new NextResponse(JSON.stringify({message : 'User registered successfully'}), {status: 200})
        }
        catch (error) {
            return new NextResponse(JSON.stringify({error : 'An error occurred while saving the user'}), {status: 500})
        }
    }
    catch (error) {
        return new NextResponse(JSON.stringify({error : 'An error occurred'}), {status: 500})
    }
}