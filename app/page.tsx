import Image from "next/image";
import Link from "next/link";
import { Users, Lightbulb, Rocket, Sparkles, Heart, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        {/* Hero Section */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 badge-gradient mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Campus Connection Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-tight">
              Find Your{" "}
              <span className="gradient-text">People</span>{" "}
              on Campus
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              A smart student platform to discover hackathon partners,
              collaborators, and people who share your interests —
              built for a connected university ecosystem.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/matches"
                className="button-primary"
              >
                <Users className="w-5 h-5" />
                Find Matches
              </Link>

              <Link
                href="/your-matches"
                className="button-outline"
              >
                <Heart className="w-5 h-5" />
                Your Matches
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-sm text-zinc-600 mt-1">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">150+</div>
                <div className="text-sm text-zinc-600 mt-1">Matches Made</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-zinc-600 mt-1">Teams Formed</div>
              </div>
            </div>
          </div>

          {/* Illustration / Visual */}
          <div className="relative animate-fade-in hidden lg:block">
            <div className="card-gradient relative overflow-hidden h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/30 blur-2xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Connect & Collaborate</h3>
                <p className="text-white/80 mt-2">Your campus network awaits</p>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 badge-gradient animate-pulse">
              <Zap className="w-3 h-3" />
              Live Now
            </div>
            <div className="absolute -bottom-4 -left-4 badge bg-white shadow-lg">
              <Rocket className="w-3 h-3" />
              Built for Students
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="mt-24 md:mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
              What you can <span className="gradient-text">do</span>
            </h2>
            <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
              Powerful features designed to help you build meaningful connections on campus
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={<Rocket className="w-6 h-6" />}
              title="Hackathon Partner Matching"
              description="Match with students based on skills like React, ML, backend, design, and more."
              accentColor="from-violet-500 to-blue-500"
            />
            <FeatureCard
              icon={<Heart className="w-6 h-6" />}
              title="Social & Interest Matching"
              description="Meet people who share interests in startups, research, events, or tech communities."
              accentColor="from-pink-500 to-rose-500"
            />
            <FeatureCard
              icon={<Lightbulb className="w-6 h-6" />}
              title="Smart Campus Ready"
              description="Built to scale into events, chats, and intelligent campus-wide collaboration."
              accentColor="from-cyan-500 to-blue-500"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-24 md:mt-32">
          <div className="card-gradient text-center py-16 px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of students already connecting and collaborating on campus
            </p>
            <Link href="/matches" className="button-primary bg-white text-indigo-600 hover:bg-gray-100">
              <Users className="w-5 h-5" />
              Start Matching Now
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 md:mt-32">
          <div className="divider"></div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <span className="font-semibold gradient-text text-base">Campus Connect</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Built for students
              </span>
              <span>·</span>
              <span>Hackathon-ready</span>
              <span>·</span>
              <span>Scalable by design</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  accentColor,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor: string;
}) {
  return (
    <div className="card group">
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${accentColor} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-zinc-900 mb-2">
        {title}
      </h3>
      <p className="text-zinc-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}