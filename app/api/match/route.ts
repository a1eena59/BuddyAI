import { NextResponse } from "next/server";
//import { supabase } from "@/lib/supabase/server";
import { supabase } from "../../../lib/supabase/server";

import { CURRENT_USER_ID } from "@/lib/constants";
import { matchUsers } from "@/lib/matcher";

type User = {
  id: string;
  skills: string[];
  interests: string[];
};


export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const purpose = searchParams.get("purpose") as "social" | "hackathon";

  const { data: users } = await supabase
    .from("users")
    .select("id, skills, interests");

  const currentUser = users?.find(u => u.id === CURRENT_USER_ID);
  const others = users?.filter(u => u.id !== CURRENT_USER_ID);

  if (!currentUser || !others) {
    return NextResponse.json({ error: "User data missing" });
  }

  const matches = matchUsers(currentUser, others, purpose);

  return NextResponse.json(matches);
}
