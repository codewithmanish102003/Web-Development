import { NextResponse } from 'next/server';
import { connectToDB } from '@/lib/mongodb';
import User from '@/models/User';

// GET Request - Fetch All Users
export async function GET() {
  await connectToDB();
  const users = await User.find();
  return NextResponse.json({ users });
}

// POST Request - Create a New User
export async function POST(request) {
  await connectToDB();
  const { name, email } = await request.json();

  const newUser = new User({ name, email });
  await newUser.save();

  return NextResponse.json({ message: 'User created successfully', newUser });
}

// DELETE Request - Delete a User by ID
export async function DELETE(request) {
  await connectToDB();
  const { id } = await request.json();

  await User.findByIdAndDelete(id);

  return NextResponse.json({ message: 'User deleted successfully' });
}