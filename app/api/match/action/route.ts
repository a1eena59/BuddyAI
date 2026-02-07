import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/server";

export async function POST(req: Request) {
  const { matchedUserId, status } = await req.json();

  // ⚠️ TEMP — replace with auth later
  const CURRENT_USER_ID = "0ca93c7d-8a09-4526-82f1-a721ffeb49d1";

  if (!["accepted", "skipped"].includes(status)) {
    return NextResponse.json(
      { error: "Invalid status" },
      { status: 400 }
    );
  }

  const { error } = await supabase
    .from("matches")
    .update({ status })
    .eq("user_id", CURRENT_USER_ID)
    .eq("matched_user_id", matchedUserId);

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
