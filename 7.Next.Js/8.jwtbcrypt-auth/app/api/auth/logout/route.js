import { cookies } from "next/headers";

export async function POST() {
 
  try {
    cookies().delete("token");
    return Response.json({ message: "Logged out successfully" });
  } catch (error) {
    return Response.json({ message: "Error logging out" }, { status: 500 });
  }
}
