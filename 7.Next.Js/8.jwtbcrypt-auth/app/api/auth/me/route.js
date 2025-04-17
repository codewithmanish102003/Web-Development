import { connectDB } from "@/lib/db";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function GET() {
  try {
    await connectDB();
    const cookiesInstance = await cookies();
    const token = cookiesInstance.get("token")?.value;
    if (!token) return Response.json({ message: "Unauthorized" }, { status: 401 });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password");

    return Response.json({ user });
  } catch (error) {
    return Response.json({ message: "Error fetching user" }, { status: 500 });
  }
}