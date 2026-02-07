import "./globals.css";
import type { Metadata } from "next";
import { User, MessageCircle, Calendar, Users, Heart, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "BuddyAI",
  description: "AI-powered socializing and collaboration for students",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {/* App Wrapper */}
        <div className="flex min-h-screen flex-col">
          
          {/* Navbar */}
          <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-lg">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
              {/* Logo */}
              <a href="/" className="flex items-center gap-2 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-blue-500 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-violet-500 to-blue-500 rounded-lg">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h1 className="text-2xl font-bold gradient-text">
                  BuddyAI
                </h1>
              </a>

              {/* Navigation - Always Visible */}
              <nav className="flex items-center gap-1">
                <NavLink href="/profile" icon={<User className="w-4 h-4" />}>
                  <span className="hidden sm:inline">Profile</span>
                </NavLink>
                <NavLink href="/chat" icon={<MessageCircle className="w-4 h-4" />}>
                  <span className="hidden sm:inline">Chat</span>
                </NavLink>
                <NavLink href="/events" icon={<Calendar className="w-4 h-4" />}>
                  <span className="hidden sm:inline">Events</span>
                </NavLink>
                <NavLink href="/matches" icon={<Users className="w-4 h-4" />}>
                  <span className="hidden sm:inline">Matches</span>
                </NavLink>
                <NavLink href="/your-matches" icon={<Heart className="w-4 h-4" />} highlight>
                  <span className="hidden sm:inline">Your Matches</span>
                </NavLink>
              </nav>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-zinc-200 bg-white">
            <div className="mx-auto max-w-6xl px-4 py-8">
              <div className="grid gap-8 md:grid-cols-3">
                {/* Brand Section */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-violet-500 to-blue-500 rounded-lg">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-bold gradient-text text-lg">BuddyAI</h3>
                  </div>
                  <p className="text-sm text-zinc-600">
                    AI-powered socializing and collaboration platform built for students.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="font-semibold text-zinc-900 mb-3">Quick Links</h4>
                  <div className="flex flex-col gap-2 text-sm">
                    <a href="/profile" className="text-zinc-600 hover:text-indigo-600 transition-colors link-underline">
                      Profile
                    </a>
                    <a href="/matches" className="text-zinc-600 hover:text-indigo-600 transition-colors link-underline">
                      Find Matches
                    </a>
                    <a href="/events" className="text-zinc-600 hover:text-indigo-600 transition-colors link-underline">
                      Events
                    </a>
                    <a href="/chat" className="text-zinc-600 hover:text-indigo-600 transition-colors link-underline">
                      Chat
                    </a>
                  </div>
                </div>

                {/* Connect Section */}
                <div>
                  <h4 className="font-semibold text-zinc-900 mb-3">Connect</h4>
                  <p className="text-sm text-zinc-600 mb-3">
                    Join our community and start making meaningful connections today.
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-sm">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-zinc-600">Active community</span>
                  </div>
                </div>
              </div>

              <div className="divider"></div>

              {/* Bottom Footer */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
                <div className="flex items-center gap-2">
                  Built for student wellbeing
                  <span className="text-lg">💙</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>© 2024 BuddyAI</span>
                  <span>·</span>
                  <a href="/privacy" className="hover:text-indigo-600 transition-colors">
                    Privacy
                  </a>
                  <span>·</span>
                  <a href="/terms" className="hover:text-indigo-600 transition-colors">
                    Terms
                  </a>
                </div>
              </div>
            </div>
          </footer>

        </div>
      </body>
    </html>
  );
}

function NavLink({
  href,
  icon,
  children,
  highlight = false,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  highlight?: boolean;
}) {
  if (highlight) {
    return (
      <a
        href={href}
        className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 text-white text-sm font-medium transition-all hover:shadow-lg hover:scale-105"
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium text-zinc-700 transition-all hover:bg-zinc-100 hover:text-indigo-600 relative group"
    >
      {icon}
      {children}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-blue-500 group-hover:w-3/4 transition-all duration-300"></span>
    </a>
  );
}