import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { email, name, password } = body;

    if (!name || !email || !password) {
      return new NextResponse("Missing info", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: { email, name, hashedPassword },
    });

    return NextResponse.json(user);
  } catch (error: any) {
    console.log(error);
    return new NextResponse("Failed to create a new user", { status: 500 });
  }
};
