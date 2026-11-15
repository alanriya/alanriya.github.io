import React from "react";
import { profile } from "../data";
import { CopyEmailButton, EmailButton, mailto } from "./EmailButtons";

export default function Contact() {
  return (
    <section id="contact" className="grid-bg bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-sm uppercase tracking-widest text-accent-light">04 / Contact</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Let's talk.</h2>
        <p className="mt-4 max-w-xl text-lg text-slate-300">
          Open to conversations about quant engineering, data platforms and research infrastructure.
        </p>
        <a
          href={mailto}
          className="mt-10 inline-block break-all font-mono text-lg text-accent-light underline decoration-accent/60 underline-offset-8 transition hover:text-white sm:text-2xl">
          {profile.email}
        </a>
        <div className="mt-8 flex flex-wrap gap-3">
          <EmailButton />
          <CopyEmailButton />
        </div>
        <div className="mt-20 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 font-mono text-xs text-slate-400">
          <span>{profile.location}</span>
          <a href={profile.linkedin} className="hover:text-white" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} className="hover:text-white" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
