import React from "react";
import { profile } from "../data";
import { CopyEmailButton, EmailButton } from "./EmailButtons";

export default function About() {
  return (
    <section id="top" className="grid-bg bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-14 sm:pt-20">
        <div className="flex flex-col-reverse items-start gap-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-6 font-mono text-sm uppercase tracking-widest text-accent-light">
              {profile.role}
            </p>
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              {profile.headline}
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-slate-300">{profile.summary}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <EmailButton />
              <CopyEmailButton />
            </div>
          </div>
          <div className="relative flex-shrink-0">
            <div className="absolute -bottom-3 -right-3 h-full w-full border-2 border-accent-light" />
            <img
              src={profile.photo}
              alt={profile.name}
              className="relative aspect-[2/3] w-44 bg-white object-cover sm:w-56 lg:w-64"
            />
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-1 border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {profile.facts.map((f) => (
            <div key={f.label} className="border-b border-r border-white/15 p-5">
              <dt className="font-mono text-xs uppercase tracking-widest text-slate-400">{f.label}</dt>
              <dd className="mt-2 font-medium text-white">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
