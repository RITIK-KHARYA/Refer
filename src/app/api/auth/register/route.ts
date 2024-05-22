import { registerSchema } from "@/validation/registerSchema";
import { NextRequest, NextResponse } from "next/server";
import vine, { errors } from "@vinejs/vine";
import { CustomErrorReporter } from "@/validation/CustomErrorReportor";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const validator = vine.compile(registerSchema);
    vine.errorReporter = () => new CustomErrorReporter();
    const payload = await validator.validate(data);

    return NextResponse.json({ status: 200, payload });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      console.log(error);
      return NextResponse.json({ status: 400, errors: error.messages });
    }
  }
}
