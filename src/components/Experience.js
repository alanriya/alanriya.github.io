import React from "react";
import { education, experience } from "../data";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <section id="experience">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle index="01">Experience</SectionTitle>
        <ol className="border-l-2 border-slate-200">
          {experience.map((job) => (
            <li key={job.company + job.period} className="relative grid gap-4 pb-12 pl-8 last:pb-0 md:grid-cols-4 md:gap-10">
              <span className="absolute -left-[7px] top-1.5 h-3 w-3 border-2 border-accent bg-white" />
              <div>
                <p className="font-mono text-sm text-accent">{job.period}</p>
                <p className="mt-1 text-sm text-slate-500">{job.location}</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-semibold tracking-tight text-ink">{job.company}</h3>
                <p className="text-slate-600">
                  {job.role}
                  {job.team && <span className="text-slate-400"> · {job.team}</span>}
                </p>
                <ul className="mt-4 space-y-2 leading-relaxed text-slate-600">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2.5 h-px w-3 flex-shrink-0 bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <h3 className="mb-6 mt-16 font-mono text-sm uppercase tracking-widest text-slate-500">Education</h3>
        <ol className="grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-3">
          {education.map((e) => (
            <li key={e.school} className="bg-white p-6">
              {e.period && <p className="font-mono text-sm text-accent">{e.period}</p>}
              <h4 className="mt-2 font-semibold text-ink">{e.degree}</h4>
              <p className="text-sm text-slate-500">{e.school}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{e.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
