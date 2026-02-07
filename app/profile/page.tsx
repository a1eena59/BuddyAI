"use client";

import { User, Heart, Code } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="flex items-center gap-2">
          <User className="h-6 w-6 text-indigo-600" />
          Your Profile
        </h1>
        <p className="mt-1">
          Tell BuddyAI about yourself so it can help you connect better.
        </p>
      </div>

      {/* Interests */}
      <div className="card">
        <h3 className="flex items-center gap-2 mb-3">
          <Heart className="h-5 w-5 text-indigo-600" />
          Interests
        </h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {["Tech", "Music", "Photography", "Gaming", "Fitness", "Reading"].map(
            (interest) => (
              <label key={interest} className="flex items-center gap-2 text-sm">
                <input type="checkbox" />
                {interest}
              </label>
            )
          )}
        </div>
      </div>

      {/* Skills */}
      <div className="card">
        <h3 className="flex items-center gap-2 mb-3">
          <Code className="h-5 w-5 text-indigo-600" />
          Skills
        </h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {["Frontend", "Backend", "ML", "Design", "Hardware", "Pitching"].map(
            (skill) => (
              <label key={skill} className="flex items-center gap-2 text-sm">
                <input type="checkbox" />
                {skill}
              </label>
            )
          )}
        </div>
      </div>

      {/* Comfort level */}
      <div className="card">
        <h3 className="mb-2">Comfort Level</h3>
        <select>
          <option>1-on-1</option>
          <option>Small groups</option>
          <option>Online-first</option>
        </select>
      </div>

      <button className="button-primary w-full">
        Save Profile
      </button>
    </div>
  );
}
