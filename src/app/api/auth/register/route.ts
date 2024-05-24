import { registerSchema } from "@/validation/registerSchema";
import { NextRequest, NextResponse } from "next/server";
import vine, { errors } from "@vinejs/vine";
import { CustomErrorReporter } from "@/validation/CustomErrorReportor";
import { genSaltSync, hashSync } from "bcryptjs";
import prisma from "@/app/DB/db.config";
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const validator = vine.compile(registerSchema);
    vine.errorReporter = () => new CustomErrorReporter();
    const payload = await validator.validate(data);
    const isEmailExist = await prisma.user.findUnique({
      where: {
        email: payload.email,
      },
    });
    if (isEmailExist) {
      return NextResponse.json({ status: 400, errors: "Email already exist" });
    }

    const salt = genSaltSync(10);
    payload.password = hashSync(payload.password, salt);
    const newAccount = await prisma.user.create({
      data: { ...payload, password: payload.password },
    });

    return NextResponse.json({ status: 200, payload });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      console.log(error);
      return NextResponse.json({ status: 400, errors: error.messages });
    }
  }
}
