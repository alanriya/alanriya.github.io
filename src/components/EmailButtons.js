import React, { useState } from "react";
import { ClipboardCopyIcon, CheckIcon, MailIcon } from "@heroicons/react/outline";
import { profile } from "../data";

export const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(profile.emailSubject)}`;

export function EmailButton({ className = "" }) {
  return (
    <a
      href={mailto}
      className={`inline-flex items-center justify-center bg-accent-light px-6 py-3 font-semibold text-ink transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-offset-2 focus:ring-offset-ink ${className}`}>
      <MailIcon className="mr-2 h-5 w-5" />
      Email me
    </a>
  );
}

export function CopyEmailButton({ className = "" }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(profile.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={`inline-flex items-center justify-center border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-accent-light hover:text-accent-light focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-offset-2 focus:ring-offset-ink ${className}`}>
      {copied ? <CheckIcon className="mr-2 h-5 w-5" /> : <ClipboardCopyIcon className="mr-2 h-5 w-5" />}
      {copied ? "Copied" : "Copy address"}
    </button>
  );
}
