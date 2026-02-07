export type ChatMessage = {
  id: string;
  sender: "user" | "agent";
  text: string;
};
