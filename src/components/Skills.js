import React from "react";
import { skills } from "../data";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle index="03">Skills</SectionTitle>
        <dl className="space-y-8">
          {skills.map(({ group, items }) => (
            <div key={group} className="grid gap-3 md:grid-cols-4 md:gap-10">
              <dt className="font-mono text-sm uppercase tracking-widest text-accent">{group}</dt>
              <dd className="flex flex-wrap gap-2 md:col-span-3">
                {items.map((item) => (
                  <span key={item} className="bg-ink px-4 py-2 text-sm font-medium text-white">
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
