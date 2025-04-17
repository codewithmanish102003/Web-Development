import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    // Find user
    const user = await User.findOne({ email });
    if (!user) return Response.json({ message: "Invalid credentials" }, { status: 401 });
    console.log(user);
    
    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return Response.json({ message: "Invalid credentials" }, { status: 401 });
     console.log(isMatch);
     
    // Generate JWT Token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    // Store token in HttpOnly cookie
    cookies().set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60,
      path: "/",
    });

    return Response.json({ message: "Login successful", token });
  } catch (error) {
    return Response.json({ message: "Error logging in" }, { status: 500 });
  }
}
