"use client";

import { useEffect, useState } from "react";

export default function ReturnToCalculator() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = document.getElementById("calculator");
    if (!el) return;

    // Observe whether calculator is in the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show button when calculator is NOT visible
        setShow(!entry.isIntersecting);
      },
      {
        // A bit of margin helps avoid flicker right at the boundary
        root: null,
        threshold: 0.05,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    const el = document.getElementById("calculator");
    if (!el) return;

    // Your section already uses scroll-mt-24, so scrollIntoView respects sticky header spacing.
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!show) return null;

  return (
    <>
      {/* Desktop: left rail pill */}
      <button
  type="button"
  onClick={handleClick}
  aria-label="Return to calculator"
  className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-1 rounded-2xl border border-orange-200 bg-white/90 px-3 py-2 text-xs font-medium text-slate-900 shadow-sm backdrop-blur hover:bg-orange-50"
>
  <ArrowUpIcon className="h-5 w-5 text-orange-600" />
  <span className="leading-tight text-center">
    Return<br />to calculator
  </span>
</button>

      {/* Mobile: bottom-left bubble */}
      <button
        type="button"
        onClick={handleClick}
        aria-label="Return to calculator"
        className="md:hidden fixed left-4 bottom-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-orange-200 bg-orange-600 shadow-sm backdrop-blur hover:bg-orange-50"
      >
        <ArrowUpIcon className="h-6 w-6 fill-white" />
      </button>
    </>
  );
}

function ArrowUpIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 5l-6 6m6-6l6 6M12 5v14"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
