type User = {
  id: string;
  skills: string[];
  interests: string[];
};

export function matchUsers(
  currentUser: User,
  others: User[],
  purpose: "social" | "hackathon"
) {
  return others
    .map(user => {
      const overlap =
        purpose === "hackathon"
          ? user.skills.filter(s => currentUser.skills.includes(s))
          : user.interests.filter(i => currentUser.interests.includes(i));

      return {
        userId: user.id,
        score: overlap.length,
        overlap
      };
    })
    .filter(u => u.score > 0)
    .sort((a, b) => b.score - a.score);
}
