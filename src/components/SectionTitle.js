import React from "react";

export default function SectionTitle({ index, children, dark = false }) {
  return (
    <div className="mb-12 flex items-baseline gap-4 border-b pb-4 border-slate-200">
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className={`text-2xl font-semibold tracking-tight ${dark ? "text-white" : "text-ink"}`}>
        {children}
      </h2>
    </div>
  );
}
