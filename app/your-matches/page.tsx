"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

type AcceptedMatch = {
  id: string;
  users: {
    id: string;
    skills: string[];
    interests: string[];
  };
};

export default function YourMatchesPage() {
  const [matches, setMatches] = useState<AcceptedMatch[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAcceptedMatches();
  }, []);

  async function fetchAcceptedMatches() {
    try {
      const res = await fetch("/api/match/accepted");
      const data = await res.json();
      setMatches(data.matches || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div className="p-6 text-center">Loading your matches...</div>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">
        Your Matches
      </h1>

      {matches.length === 0 ? (
        <p className="text-gray-500">
          You haven’t accepted any matches yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <div
              key={match.id}
              className="bg-white rounded-xl shadow p-5"
            >
              <h2 className="font-medium text-lg mb-3">
                Connected Student
              </h2>

              <div className="mb-3">
                <p className="text-sm font-semibold">Skills</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {match.users.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-semibold">Interests</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {match.users.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <button
                className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
              >
                <MessageCircle className="w-4 h-4" />
                Chat
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
