export const metadata = {
    title: "10,000 Steps in Miles | Steps2Miles",
    description:
      "How many miles is 10,000 steps? See average ranges, why results vary, and a table for common step goals like 5,000, 7,500, 10,000, 15,000, and 20,000 steps.",
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
          href="/#charts"
          className="rounded-full border border-orange-200 px-4 py-2 text-sm text-slate-800 hover:bg-orange-50"
        >
          Jump to Charts on Homepage
        </Link>
      </div>
    );
  }
  
  export default function TenThousandStepsInMilesPage() {
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
  
              <details className="relative">
                <summary className="list-none cursor-pointer rounded-full border border-orange-200 px-3 py-1.5 text-sm text-slate-800 hover:bg-orange-100">
                  About
                </summary>
                <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-lg">
                  <nav className="py-1 text-sm">
                    <Link
                      href="/about"
                      className="block px-4 py-2 text-slate-800 hover:bg-orange-50"
                    >
                      About Steps2Miles
                    </Link>
                    <Link
                      href="/privacy-policy"
                      className="block px-4 py-2 text-slate-800 hover:bg-orange-50"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href="/contact"
                      className="block px-4 py-2 text-slate-800 hover:bg-orange-50"
                    >
                      Contact
                    </Link>
                    <Link
                      href="/terms"
                      className="block px-4 py-2 text-slate-800 hover:bg-orange-50"
                    >
                      Terms &amp; Disclaimer
                    </Link>
                  </nav>
                </div>
              </details>
            </div>
          </div>
        </header>
  
        <main className="mx-auto max-w-5xl px-4 py-10">
          {/* Hero */}
          <section className="mb-8">
            <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <p className="mb-2 inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700">
                Resources
              </p>
  
              <h1 className="text-3xl font-semibold tracking-tight text-black md:text-4xl">
                How Many Miles Is 10,000 Steps?
              </h1>
  
              <p className="mt-2 text-sm text-slate-600">Last updated: {updated}</p>
  
              <p className="mt-5 max-w-3xl text-slate-700">
              For most adults,{" "}
                <span className="font-medium">10,000 steps is about 4.5–5 miles</span>.
                The exact number depends on your step length (stride), which varies
                by height, pace, terrain, and biomechanics.
              </p>
  
              <CtaRow />
            </div>
          </section>
  
  
          {/* Why it varies */}
          <section className="mt-6 rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight text-black">
              Why Your Result Might Be Higher or Lower
            </h2>
  
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li>
                <span className="font-medium">Step length:</span> longer steps cover
                more distance per step.
              </li>
              <li>
                <span className="font-medium">Height / leg length:</span> taller
                people generally take longer steps.
              </li>
              <li>
                <span className="font-medium">Pace:</span> step length tends to increase
                at faster paces (walking fast, jogging, running).
              </li>
              <li>
                <span className="font-medium">Terrain:</span> hills, trails, and uneven
                surfaces can change your gait and stride.
              </li>
              <li>
                <span className="font-medium">Fatigue / footwear:</span> stride can shorten
                when you’re tired or changing shoes/surfaces.
              </li>
            </ul>
          </section>
  
          {/* Common step goals table */}
          <section className="mt-6 rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight text-black">
              Common Step Goals Converted to Miles
            </h2>
  
            <p className="mt-2 text-slate-700">
              Below are practical ranges using typical step-length assumptions.
              Use these as a guide — your exact number may vary.
            </p>
  
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-[640px] w-full border-collapse text-left">
                <thead>
                  <tr className="bg-orange-50 text-sm">
                    <th className="px-4 py-3 font-semibold text-slate-900">Steps</th>
                    <th className="px-4 py-3 font-semibold text-slate-900">
                      Estimated Miles (Typical Range)
                    </th>
                    <th className="px-4 py-3 font-semibold text-slate-900">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    {
                      steps: "5,000",
                      miles: "2.2 – 2.6",
                      notes: "Often a light-to-moderate daily baseline.",
                    },
                    {
                      steps: "7,500",
                      miles: "3.3 – 3.9",
                      notes: "Common health-focused daily target.",
                    },
                    {
                      steps: "10,000",
                      miles: "4.5 – 5.2",
                      notes: "Popular daily goal; varies most by stride.",
                    },
                    {
                      steps: "15,000",
                      miles: "6.7 – 7.8",
                      notes: "Active day; often includes intentional walks.",
                    },
                    {
                      steps: "20,000",
                      miles: "8.9 – 10.4",
                      notes: "High-activity day; long walk, run, or lots of movement.",
                    },
                  ].map((row) => (
                    <tr key={row.steps} className="border-t border-orange-100">
                      <td className="px-4 py-3 font-medium text-slate-900">
                        {row.steps}
                      </td>
                      <td className="px-4 py-3 text-slate-700">{row.miles}</td>
                      <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
  
            <p className="mt-4 text-sm text-slate-600">
              Tip: If you know your step length, you can convert steps to miles using:
              <span className="font-medium">
                {" "}
                (step length in feet × steps) ÷ 5,280
              </span>
              .
            </p>
  
            <CtaRow />
          </section>
  
          {/* FAQ mini */}
          <section className="mt-6 rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight text-black">
              FAQs
            </h2>
  
            <div className="mt-4 space-y-3">
              <details className="rounded-2xl border border-orange-100 bg-white p-4 shadow-sm">
                <summary className="cursor-pointer select-none font-medium text-slate-900">
                  Is 10,000 steps always exactly 5 miles?
                </summary>
                <div className="mt-2 text-slate-700">
                  No. 5 miles is a common approximation. Your result depends on your
                  personal step length and pace. Many people fall closer to 4.5–5.0 miles.
                </div>
              </details>
  
              <details className="rounded-2xl border border-orange-100 bg-white p-4 shadow-sm">
                <summary className="cursor-pointer select-none font-medium text-slate-900">
                  Does running change the miles-per-step?
                </summary>
                <div className="mt-2 text-slate-700">
                  Often, yes. When you run, your step length may increase, meaning
                  you cover more distance per step compared to walking.
                </div>
              </details>
  
              <details className="rounded-2xl border border-orange-100 bg-white p-4 shadow-sm">
                <summary className="cursor-pointer select-none font-medium text-slate-900">
                  What’s the best way to get an accurate conversion?
                </summary>
                <div className="mt-2 text-slate-700">
                  Measure your own step length by walking a known distance at your normal
                  pace and dividing distance by steps. Then use the calculator’s
                  Known Step Length method.
                </div>
              </details>
            </div>
          </section>
  
          {/* Cross-links */}
          <section className="mt-6 rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight text-black">
              Related Resources
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li>
                <Link
                  href="/how-many-steps-in-a-mile"
                  className="font-medium text-orange-700 underline underline-offset-4 hover:text-orange-800"
                >
                  How many steps are in a mile?
                </Link>
              </li>
              <li>
                <Link
                  href="/average-step-length-by-height-and-pace"
                  className="font-medium text-orange-700 underline underline-offset-4 hover:text-orange-800"
                >
                  Average step length by height (chart + formula)
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
  