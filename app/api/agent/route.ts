import { NextResponse } from "next/server";
import { agentReply } from "@/lib/agent";

export async function POST(req: Request) {
  const body = await req.json();

  const { message, purpose } = body;

  if (!message || !purpose) {
    return NextResponse.json(
      { error: "Invalid input" },
      { status: 400 }
    );
  }

  const response = await agentReply({ message, purpose });

  return NextResponse.json(response);
}
