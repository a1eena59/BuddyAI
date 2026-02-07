/*"use client";

import { useEffect, useState } from "react";
import { Users, Sparkles } from "lucide-react";

type Match = {
  userId: string;
  score: number;
  overlap: string[];
};

export default function MatchesPage() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [purpose, setPurpose] = useState<"social" | "hackathon">("social");

  // Fetch matches from backend
  useEffect(() => {
    async function fetchMatches() {
      setLoading(true);
      try {
        const res = await fetch(`/api/match?purpose=${purpose}`);
        const data = await res.json();
        setMatches(data);
      } catch (err) {
        console.error("Error fetching matches", err);
      } finally {
        setLoading(false);
      }
    }

    fetchMatches();
  }, [purpose]);

  // Save decision (accept / skip)
  async function handleDecision(
    matchedUserId: string,
    status: "accepted" | "skipped"
  ) {
    try {
      await fetch("/api/match/decision", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          matchedUserId,
          purpose,
          status
        })
      });

      // Remove card after action
      setMatches(prev =>
        prev.filter(match => match.userId !== matchedUserId)
      );
    } catch (err) {
      console.error("Failed to save decision", err);
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      
      <div className="flex items-center gap-2 mb-6">
        <Users className="text-blue-600" />
        <h1 className="text-2xl font-semibold">Student Matches</h1>
      </div>

      
      <div className="flex gap-2 mb-8">
        <button
          onClick={() => setPurpose("social")}
          className={`px-4 py-2 rounded-lg text-sm ${
            purpose === "social"
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Social
        </button>

        <button
          onClick={() => setPurpose("hackathon")}
          className={`px-4 py-2 rounded-lg text-sm ${
            purpose === "hackathon"
              ? "bg-purple-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Hackathon
        </button>
      </div>

      
      {loading ? (
        <p className="text-gray-500">Finding matches for you...</p>
      ) : matches.length === 0 ? (
        <p className="text-gray-500">
          No matches found. Try again later.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map(match => (
            <div
              key={match.userId}
              className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="text-green-600" size={18} />
                <h2 className="font-medium">
                  Student {match.userId}
                </h2>
              </div>

              <p className="text-sm text-gray-600 mb-3">
                Match score:{" "}
                <span className="font-semibold">{match.score}</span>
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {match.overlap.map(item => (
                  <span
                    key={item}
                    className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    handleDecision(match.userId, "accepted")
                  }
                  className="flex-1 bg-green-600 text-white text-sm py-2 rounded-lg"
                >
                  Connect
                </button>

                <button
                  onClick={() =>
                    handleDecision(match.userId, "skipped")
                  }
                  className="flex-1 bg-gray-200 text-gray-700 text-sm py-2 rounded-lg"
                >
                  Skip
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
*/

"use client";

import { useEffect, useState } from "react";
import { Users, Sparkles, Heart, Code, X, Check, Loader2 } from "lucide-react";

type Match = {
  userId: string;
  score: number;
  overlap: string[];
};

export default function MatchesPage() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [purpose, setPurpose] = useState<"social" | "hackathon">("social");

  // Fetch matches from backend
  useEffect(() => {
    async function fetchMatches() {
      setLoading(true);
      try {
        const res = await fetch(`/api/match?purpose=${purpose}`);
        const data = await res.json();
        setMatches(data);
      } catch (err) {
        console.error("Error fetching matches", err);
      } finally {
        setLoading(false);
      }
    }

    fetchMatches();
  }, [purpose]);

  // Save decision (accept / skip)
  async function handleDecision(
    matchedUserId: string,
    status: "accepted" | "skipped"
  ) {
    try {
      await fetch("/api/match/decision", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          matchedUserId,
          purpose,
          status
        })
      });

      // Remove card after action
      setMatches(prev =>
        prev.filter(match => match.userId !== matchedUserId)
      );
    } catch (err) {
      console.error("Failed to save decision", err);
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      {/* Page Header */}
      <div className="mb-8 animate-fade-in">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 text-white shadow-lg">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-zinc-900">
              Discover Your <span className="gradient-text">Matches</span>
            </h1>
            <p className="text-zinc-600 text-sm mt-1">
              Connect with students who share your interests and goals
            </p>
          </div>
        </div>
      </div>

      {/* Purpose Toggle */}
      <div className="flex gap-3 mb-8 animate-slide-in">
        <button
          onClick={() => setPurpose("social")}
          className={`
            relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300
            ${
              purpose === "social"
                ? "bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-lg scale-105"
                : "bg-white border-2 border-zinc-200 text-zinc-700 hover:border-pink-300 hover:bg-pink-50"
            }
          `}
        >
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4" />
            Social Connections
          </div>
          {purpose === "social" && (
            <div className="absolute inset-0 rounded-xl bg-white/20 animate-pulse"></div>
          )}
        </button>

        <button
          onClick={() => setPurpose("hackathon")}
          className={`
            relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300
            ${
              purpose === "hackathon"
                ? "bg-gradient-to-br from-violet-500 to-blue-500 text-white shadow-lg scale-105"
                : "bg-white border-2 border-zinc-200 text-zinc-700 hover:border-violet-300 hover:bg-violet-50"
            }
          `}
        >
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4" />
            Hackathon Partners
          </div>
          {purpose === "hackathon" && (
            <div className="absolute inset-0 rounded-xl bg-white/20 animate-pulse"></div>
          )}
        </button>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="card-muted text-center">
          <div className="text-2xl font-bold gradient-text">{matches.length}</div>
          <div className="text-xs text-zinc-600 mt-1">Available Matches</div>
        </div>
        <div className="card-muted text-center">
          <div className="text-2xl font-bold gradient-text">
            {purpose === "social" ? "Social" : "Tech"}
          </div>
          <div className="text-xs text-zinc-600 mt-1">Current Mode</div>
        </div>
        <div className="card-muted text-center">
          <div className="text-2xl font-bold gradient-text">100%</div>
          <div className="text-xs text-zinc-600 mt-1">Match Quality</div>
        </div>
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
          <Loader2 className="w-12 h-12 text-indigo-600 animate-spin mb-4" />
          <p className="text-lg font-medium text-zinc-700">Finding your perfect matches...</p>
          <p className="text-sm text-zinc-500 mt-2">This won't take long</p>
        </div>
      ) : matches.length === 0 ? (
        <div className="card text-center py-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-violet-100 to-blue-100 mb-4">
            <Users className="w-10 h-10 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold text-zinc-900 mb-2">
            No matches found right now
          </h3>
          <p className="text-zinc-600 mb-6 max-w-md mx-auto">
            We're always adding new students to the platform. Check back soon or try switching modes!
          </p>
          <button
            onClick={() => setPurpose(purpose === "social" ? "hackathon" : "social")}
            className="button-primary"
          >
            Try {purpose === "social" ? "Hackathon" : "Social"} Mode
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map((match, index) => (
            <div
              key={match.userId}
              className="card group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-white font-bold text-lg">
                    {match.userId.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h2 className="font-semibold text-zinc-900">
                      {match.userId}
                    </h2>
                    <div className="flex items-center gap-1 text-xs text-zinc-500">
                      <Sparkles className="w-3 h-3 text-yellow-500" />
                      <span>Match</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Match Score */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-zinc-600">Match Score</span>
                  <span className="text-sm font-bold gradient-text">{match.score}%</span>
                </div>
                <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-500 to-blue-500 rounded-full transition-all duration-1000"
                    style={{ width: `${match.score}%` }}
                  ></div>
                </div>
              </div>

              {/* Common Interests */}
              <div className="mb-4">
                <div className="text-xs font-medium text-zinc-600 mb-2">
                  Common Interests
                </div>
                <div className="flex flex-wrap gap-2">
                  {match.overlap.map((item, idx) => (
                    <span
                      key={item}
                      className="badge"
                      style={{ animationDelay: `${(index * 0.1) + (idx * 0.05)}s` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-6">
                <button
                  onClick={() => handleDecision(match.userId, "accepted")}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 text-white font-semibold text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <Check className="w-4 h-4" />
                  Connect
                </button>

                <button
                  onClick={() => handleDecision(match.userId, "skipped")}
                  className="inline-flex items-center justify-center p-3 rounded-lg border-2 border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:border-zinc-300 transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Call to Action */}
      {matches.length > 0 && (
        <div className="mt-12 card-gradient text-center py-8 animate-fade-in">
          <h3 className="text-xl font-bold text-white mb-2">
            Found someone interesting?
          </h3>
          <p className="text-white/90 text-sm mb-4">
            Connect now and start building meaningful relationships
          </p>
          <a href="/your-matches" className="button-primary bg-white text-indigo-600 hover:bg-gray-100">
            <Heart className="w-4 h-4" />
            View Your Connections
          </a>
        </div>
      )}
    </div>
  );
}