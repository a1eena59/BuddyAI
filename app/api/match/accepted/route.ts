import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/server";

export async function GET() {
  // ⚠️ TEMP: replace with auth later
  const CURRENT_USER_ID = "0ca93c7d-8a09-4526-82f1-a721ffeb49d1";

  const { data, error } = await supabase
    .from("matches")
    .select(`
      id,
      matched_user_id,
      users:matched_user_id (
        id,
        skills,
        interests
      )
    `)
    .eq("user_id", CURRENT_USER_ID)
    .eq("status", "accepted");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    matches: data,
  });
}
