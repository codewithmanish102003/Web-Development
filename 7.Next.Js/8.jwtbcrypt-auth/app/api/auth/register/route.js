import { connectDB } from "@/lib/db";
import User from "@/models/User";

export async function POST(req) {
  try {
    await connectDB();
    const { username, email, password } = await req.json();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return Response.json({ message: "User already exists" }, { status: 400 });
    }

    // Create new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    return Response.json({ message: "User registered successfully" }, { status: 201 });
  } catch (error) {
    return Response.json({ message: "Error registering user" }, { status: 500 });
  }
}
