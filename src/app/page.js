import React from "react";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
      {/* Hero Section */}
      <section className="flex min-h-[85vh] flex-col items-center justify-center px-6 text-center">
        <span className="mb-6 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-5 py-2 text-sm font-medium text-indigo-300">
          🚀 Session Project · Assignment 08
        </span>

        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-7xl">
          Welcome to My{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Assignment 08
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          This is my Assignment 08 Session Project. A place where I apply my
          learning, practice new concepts, and build something meaningful
          through code.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/about"
            className="rounded-xl bg-indigo-600 px-8 py-3.5 font-semibold shadow-lg shadow-indigo-600/20 transition hover:-translate-y-1 hover:bg-indigo-500"
          >
            Explore Project →
          </a>

          <a
            href="#features"
            className="rounded-xl border border-slate-700 px-8 py-3.5 font-semibold text-slate-300 transition hover:border-indigo-400 hover:text-white"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-indigo-400">
            Project Overview
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            What This Project Is About
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Exploring concepts, improving development skills, and turning
            knowledge into practical experience.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              number: "01",
              title: "Learning",
              description:
                "Understanding new concepts and learning modern web development techniques.",
            },
            {
              number: "02",
              title: "Building",
              description:
                "Applying theoretical knowledge to build practical and meaningful projects.",
            },
            {
              number: "03",
              title: "Improving",
              description:
                "Improving coding skills through practice, consistency, and problem solving.",
            },
          ].map((feature) => (
            <div
              key={feature.number}
              className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-8 transition duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:bg-slate-800"
            >
              <span className="text-4xl font-extrabold text-indigo-500/50">
                {feature.number}
              </span>

              <h3 className="mt-5 text-xl font-bold">{feature.title}</h3>

              <p className="mt-3 leading-7 text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-indigo-500/20 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 px-6 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Learning Today, Building Tomorrow.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Every project is another step forward in my development journey.
            Thanks for visiting!
          </p>

          <a
            href="/about"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3 font-bold text-slate-900 transition hover:bg-indigo-100"
          >
            View My Project
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Assignment 08 Session Project. All rights reserved.
      </footer>
    </main>
  );
};

export default HomePage;
