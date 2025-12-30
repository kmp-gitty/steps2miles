"use client";

import { useState } from "react";

export default function EmbedToolButton() {
  const [showEmbed, setShowEmbed] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setShowEmbed(true)}
        className="shrink-0 rounded-full border border-orange-200 px-3 py-1.5 text-sm text-slate-800 hover:bg-orange-100"
      >
        Embed this tool
      </button>

      {showEmbed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-slate-900">
                Embed the Steps2Miles Calculator
              </h3>
              <button
                type="button"
                onClick={() => setShowEmbed(false)}
                className="text-slate-500 hover:text-slate-700"
                aria-label="Close embed modal"
              >
                ✕
              </button>
            </div>

            <p className="mt-2 text-sm text-slate-600">
              Copy and paste the code below to embed this calculator on your website.
            </p>

            <textarea
              readOnly
              className="mt-4 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 font-mono text-xs text-slate-800"
              rows={6}
              value={`<iframe 
  src="https://www.steps2miles.com/embed"
  width="100%"
  height="520"
  style="border:0; border-radius:16px;"
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>`}
            />

            <div className="mt-3 flex items-center justify-between gap-3">
              <p className="text-xs text-slate-500">
                Tip: Works best in content areas at least 600px wide.
              </p>

              <button
                type="button"
                onClick={async () => {
                  await navigator.clipboard.writeText(
                    `<iframe src="https://www.steps2miles.com/embed" width="100%" height="520" style="border:0; border-radius:16px;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
                  );
                }}
                className="rounded-full bg-orange-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-orange-700"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
