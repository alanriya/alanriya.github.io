import React from "react";
import { ArrowUpRightIcon } from "./icons";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 flex items-baseline gap-4 border-b border-white/15 pb-4">
          <span className="font-mono text-sm text-accent-light">02</span>
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
        </div>
        <p className="-mt-6 mb-12 max-w-2xl text-slate-400">
          Personal builds. Work projects are private; I'm happy to walk through designs.
        </p>
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block ${i === 0 ? "sm:col-span-2" : ""}`}>
              <div
                className={`overflow-hidden border border-white/15 bg-panel transition group-hover:border-accent-light ${
                  i === 0 ? "aspect-[21/9]" : "aspect-[16/10]"
                }`}>
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                <ArrowUpRightIcon className="mt-1.5 h-5 w-5 flex-shrink-0 text-slate-500 transition group-hover:text-accent-light" />
              </div>
              <p className="mt-2 max-w-xl leading-relaxed text-slate-400">{p.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
                {p.tags.map((t) => (
                  <li key={t} className="border border-accent-light/40 px-2 py-0.5 text-accent-light">
                    {t}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
