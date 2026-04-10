import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "../../../lib/db";

interface RegisterRequestBody {
  name?: string;
  email?: string;
  password?: string;
}

export async function POST(request: Request) {
  try {
    const body: RegisterRequestBody = await request.json();
    const { name, email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 },
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name: name || "",
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      {
        message: "User created successfully",
        user: { id: user.id, email: user.email },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Registration error:", error.message, error.stack);
    return NextResponse.json(
      { error: "Something went wrong", details: error.message },
      { status: 500 },
    );
  }
}
