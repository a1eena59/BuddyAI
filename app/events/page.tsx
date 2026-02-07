import { Calendar, Users } from "lucide-react";

const events = [
  {
    title: "Campus Hackathon",
    type: "Hackathon",
    tags: ["Frontend", "Backend", "Design"],
  },
  {
    title: "Photography Walk",
    type: "Social",
    tags: ["Photography", "Outdoors"],
  },
  {
    title: "AI Ideathon",
    type: "Competition",
    tags: ["ML", "Pitching"],
  },
];

export default function EventsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="flex items-center gap-2">
          <Calendar className="h-6 w-6 text-indigo-600" />
          Events & Competitions
        </h1>
        <p className="mt-1">
          Discover events BuddyAI can help you prepare for.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div key={event.title} className="card space-y-3">
            <h3>{event.title}</h3>
            <p className="text-sm text-gray-500">{event.type}</p>

            <div className="flex flex-wrap gap-2">
              {event.tags.map((tag) => (
                <span key={tag} className="badge">
                  {tag}
                </span>
              ))}
            </div>

            <button className="button-secondary w-full">
              <Users className="h-4 w-4" />
              Find Teammates
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
