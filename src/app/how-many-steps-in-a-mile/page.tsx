export const metadata = {
    title: "How Many Steps in a Mile? | Steps2Miles",
    description:
      "How many steps are in a mile? See average step counts for walking and running, plus how height and pace affect steps per mile.",
  };
  
  import Link from "next/link";
  
  function CtaRow() {
    return (
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <Link
          href="/#calculator"
          className="inline-flex items-center justify-center rounded-full bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700"
        >
          Use the Steps to Miles Calculator
        </Link>
        <Link
          href="/#faq"
          className="rounded-full border border-orange-200 px-4 py-2 text-sm text-slate-800 hover:bg-orange-50"
        >
          Jump to Similar Questions
        </Link>
      </div>
    );
  }
  
  export default function HowManyStepsInAMilePage() {
    const updated = "February 11, 2026";
  
    return (
      <div className="min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-orange-100 bg-orange-50/80 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <Link href="/" className="font-semibold tracking-tight">
              <span className="text-slate-900">Steps</span>
              <span className="text-orange-600">2</span>
              <span className="text-slate-900">Miles</span>
            </Link>
  
            <div className="flex items-center gap-3">
              <Link
                href="/#calculator"
                className="rounded-full border border-orange-200 px-3 py-1.5 text-sm text-slate-800 hover:bg-orange-100"
              >
                Back to Calculator
              </Link>
  
              {/* Resources dropdown */}
              <details className="relative">
                <summary className="list-none cursor-pointer rounded-full border border-orange-200 px-3 py-1.5 text-sm text-slate-800 hover:bg-orange-100">
                  Resources
                </summary>
                <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-lg">
                  <nav className="py-1 text-sm">
                    <Link
                      href="/10000-steps-in-miles"
                      className="block px-4 py-2 text-slate-800 hover:bg-orange-50"
                    >
                      10K Steps in Miles
                    </Link>
                    <Link
                      href="/average-step-length-by-height-and-pace"
                      className="block px-4 py-2 text-slate-800 hover:bg-orange-50"
                    >
                      Height & Pace Impact on Step Length
                    </Link>
                    <Link
                      href="/how-many-steps-in-a-mile"
                      className="block px-4 py-2 text-slate-800 hover:bg-orange-50"
                    >
                      How many Steps in 1 Mile?
                    </Link>
                  </nav>
                </div>
              </details>
  
              {/* About dropdown */}
              <details className="relative">
                <summary className="list-none cursor-pointer rounded-full border border-orange-200 px-3 py-1.5 text-sm text-slate-800 hover:bg-orange-100">
                  About
                </summary>
                <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-lg">
                  <nav className="py-1 text-sm">
                    <Link href="/about" className="block px-4 py-2 hover:bg-orange-50">
                      About Steps2Miles
                    </Link>
                    <Link href="/privacy-policy" className="block px-4 py-2 hover:bg-orange-50">
                      Privacy Policy
                    </Link>
                    <Link href="/contact" className="block px-4 py-2 hover:bg-orange-50">
                      Contact
                    </Link>
                    <Link href="/terms" className="block px-4 py-2 hover:bg-orange-50">
                      Terms & Disclaimer
                    </Link>
                  </nav>
                </div>
              </details>
            </div>
          </div>
        </header>
  
        <main className="mx-auto max-w-5xl px-4 py-10">
          {/* Hero */}
          <section className="mb-8 rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
            <p className="mb-2 inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700">
              Resources
            </p>
  
            <h1 className="text-3xl font-semibold tracking-tight text-black md:text-4xl">
              How Many Steps Are in 1 Mile?
            </h1>
  
            <p className="mt-2 text-sm text-slate-600">Last updated: {updated}</p>
  
            <p className="mt-5 max-w-3xl text-slate-700">
              For most adults, there are approximately{" "}
              <span className="font-medium">2,000 to 2,500 steps in one mile</span>.
              The exact number depends on your step length, which varies based on height,
              pace, terrain, and biomechanics.
            </p>
  
            <CtaRow />
          </section>
  
          {/* Walking vs Running */}
          <section className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight text-black">
              Steps Per Mile: Walking vs Running
            </h2>
  
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-[500px] w-full border-collapse text-left">
                <thead>
                  <tr className="bg-orange-50 text-sm">
                    <th className="px-4 py-3 font-semibold text-slate-900">Activity</th>
                    <th className="px-4 py-3 font-semibold text-slate-900">Typical Steps per Mile</th>
                    <th className="px-4 py-3 font-semibold text-slate-900">Why It Varies</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-t border-orange-100">
                    <td className="px-4 py-3 font-medium text-slate-900">Walking</td>
                    <td className="px-4 py-3 text-slate-700">2,000 – 2,400</td>
                    <td className="px-4 py-3 text-slate-700">
                      Shorter stride, slower pace
                    </td>
                  </tr>
                  <tr className="border-t border-orange-100">
                    <td className="px-4 py-3 font-medium text-slate-900">Jogging</td>
                    <td className="px-4 py-3 text-slate-700">1,800 – 2,200</td>
                    <td className="px-4 py-3 text-slate-700">
                      Moderate stride length increase
                    </td>
                  </tr>
                  <tr className="border-t border-orange-100">
                    <td className="px-4 py-3 font-medium text-slate-900">Running</td>
                    <td className="px-4 py-3 text-slate-700">1,500 – 1,900</td>
                    <td className="px-4 py-3 text-slate-700">
                      Longer stride at higher speeds
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
  
          {/* Height impact */}
          <section className="mt-6 rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight text-black">
              How Height Affects Steps Per Mile
            </h2>
  
            <p className="mt-3 text-slate-700">
              Taller individuals typically take fewer steps per mile because they
              have longer legs and naturally longer stride lengths. Shorter individuals
              generally take more steps per mile.
            </p>
  
            <p className="mt-3 text-slate-700">
              Height-based formulas estimate step length using multipliers like
              0.413 (women) and 0.415 (men) applied to height in inches.
            </p>
  
            <CtaRow />
          </section>
  
          {/* Why estimates vary */}
          <section className="mt-6 rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight text-black">
              Why There Isn’t One Exact Number
            </h2>
  
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li>Stride length differs between individuals.</li>
              <li>Pace influences step length.</li>
              <li>Terrain changes gait mechanics.</li>
              <li>Fatigue can shorten stride over long distances.</li>
              <li>Footwear and surface type affect biomechanics.</li>
            </ul>
          </section>
  
          {/* Related */}
          <section className="mt-6 rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight text-black">
              Related Resources
            </h2>
  
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li>
                <Link
                  href="/10000-steps-in-miles"
                  className="font-medium text-orange-700 underline underline-offset-4 hover:text-orange-800"
                >
                  How many miles is 10,000 steps?
                </Link>
              </li>
              <li>
                <Link
                  href="/average-step-length-by-height-and-pace"
                  className="font-medium text-orange-700 underline underline-offset-4 hover:text-orange-800"
                >
                  Height & Pace Impact on Step Length
                </Link>
              </li>
            </ul>
          </section>
  
          <footer className="py-10 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Steps2Miles • Built for Good via ads4Good
          </footer>
        </main>
      </div>
    );
  }
  