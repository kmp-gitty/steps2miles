export const metadata = {
    title: "About Steps2Miles",
    description:
      "Learn about our Steps2Miles calculator, who we are, and how we're using our website for Good.",
  };

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
        <p className="mb-2 inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700">
          About
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">About Steps2Miles</h1>
        <p className="mt-3 text-slate-700">
        A moving body is a happy body. Since we were kids we were always in motion - running, playing, sports, you name it. As we progressed through school, each season was earmarked by a sport: Cross Country in Fall, Basketball in Winter, Track in Spring and Baseball in Summer (or some other combination). In our college years, sport took more of a focus as competing at the D1 level took more than just "good genes". Out of school and into our adult lives, we continue to hold the value of movement to the highest level.<br /><br />

Experiencing various injuries, and having aging and disabled loved ones, we understand that "movement" has a different definition and limit for everyone. So, our goal with this calculator was to create something that's helpful for most people when in motion on their feet.<br /><br />

Our professional jobs have been in website creation and marketing, and we wanted to combine the 3 into 1: love of movement + values in helping others + professional skills = this website.
        </p>

        <h2 className="mt-6 text-lg font-semibold tracking-tight">A part of the ads for Good network</h2>
        <p className="mt-2 text-slate-700">
          This tool is connected to{" "}
          <a
            href="https://www.ads4good.com/for-good"
            className="font-medium text-orange-700 underline underline-offset-4 hover:text-orange-800"
            target="_blank"
            rel="noreferrer"
          >
            ads for Good
          </a>
          , a mission-driven company focused on education about the advertising industry and focusing on people over profits.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700"
          >
            Back to calculator
          </Link>
          <a
            href="https://www.ads4good.com/network"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-orange-200 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-orange-100"
          >
            Check-out the Network
          </a>
        </div>
      </div>
    </main>
  );
}
