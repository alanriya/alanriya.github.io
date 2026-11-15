import React from "react";
import { profile } from "../data";
import { mailto } from "./EmailButtons";

const links = [
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight text-white">
          {profile.name.toLowerCase().replace(" ", ".")}
          <span className="text-accent-light">_</span>
        </a>
        <nav className="flex items-center gap-8 text-sm">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="hidden text-slate-400 transition hover:text-white sm:block">
              {label}
            </a>
          ))}
          <a
            href={mailto}
            className="border border-accent-light px-4 py-1.5 font-medium text-accent-light transition hover:bg-accent-light hover:text-ink">
            Email me
          </a>
        </nav>
      </div>
    </header>
  );
}
