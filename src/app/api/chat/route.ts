// src/app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getHFResponse } from "@/lib/hf";

export async function POST(req: NextRequest) {
  try {
    const { question } = await req.json();
    if (!question) {
      return NextResponse.json({ answer: "Question is required" }, { status: 400 });
    }

    const answer = await getHFResponse(question);
    return NextResponse.json({ answer });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ answer: "Something went wrong" }, { status: 500 });
  }
}
