import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/server";
import { CURRENT_USER_ID } from "@/lib/constants";

export async function POST(req: Request) {
  const { message } = await req.json();

  await supabase.from("chats").insert({
    user_id: CURRENT_USER_ID,
    message
  });

  return NextResponse.json({ success: true });
}
