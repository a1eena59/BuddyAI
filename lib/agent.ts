type AgentInput = {
  message: string;
  purpose: "social" | "hackathon";
};

export async function agentReply({ message, purpose }: AgentInput) {
  // For now: rule-based + expandable to LLM
  if (purpose === "hackathon") {
    return {
      reply: "Got it! I’ll help you find hackathon partners with matching skills.",
      intent: "MATCH_HACKATHON"
    };
  }

  return {
    reply: "Nice! I can help you connect with people who share your interests.",
    intent: "MATCH_SOCIAL"
  };
}
