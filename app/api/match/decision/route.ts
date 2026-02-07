import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/server";
import { CURRENT_USER_ID } from "@/lib/constants";

export async function POST(req: Request) {
  const body = await req.json();

  const { matchedUserId, purpose, status } = body;

  if (!matchedUserId || !purpose || !status) {
    return NextResponse.json(
      { error: "Missing fields" },
      { status: 400 }
    );
  }

  const { error } = await supabase.from("matches").insert({
    user_id: CURRENT_USER_ID,
    matched_user_id: matchedUserId,
    purpose,
    status
  });

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
