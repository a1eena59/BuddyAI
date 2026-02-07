"use client";

import { Send, Sparkles } from "lucide-react";

export default function ChatPage() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-4">
      <div>
        <h1 className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-indigo-600" />
          BuddyAI Chat
        </h1>
        <p className="mt-1">
          Ask BuddyAI to help you socialize or find teammates.
        </p>
      </div>

      {/* Chat window */}
      <div className="card flex flex-col gap-3 h-[400px] overflow-y-auto">
        <div className="chat-bubble-ai">
          Hi 👋 I’m BuddyAI. How can I help you today?
        </div>

        <div className="chat-bubble-user">
          Help me find people with similar interests.
        </div>

        <div className="chat-bubble-ai">
          Sure! I found a few students who enjoy tech and music like you.
          Would you like me to introduce you?
        </div>
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input placeholder="Type your message…" />
        <button className="button-primary">
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
