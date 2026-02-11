export const metadata = {
    title: "Height & Pace Impact on Step Length | Steps2Miles",
    description:
      "Average step length varies by height and pace. Learn how step length is estimated, why faster pace increases stride, and how it affects step count and distance.",
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
          href="/#methodology"
          className="rounded-full border border-orange-200 px-4 py-2 text-sm text-slate-800 hover:bg-orange-50"
        >
          See Methodology on Homepage
        </Link>
      </div>
    );
  }
  
  export default function AverageStepLengthByHeightAndPacePage() {
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
                      Height &amp; Pace Impact on Step Length
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
          <section className="mb-8 rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
            <p className="mb-2 inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700">
              Resources
            </p>
  
            <h1 className="text-3xl font-semibold tracking-tight text-black md:text-4xl">
              Height &amp; Pace Impact on Step Length
            </h1>
  
            <p className="mt-2 text-sm text-slate-600">Last updated: {updated}</p>
  
            <p className="mt-5 max-w-3xl text-slate-700">
              Step length is one of the biggest factors that determines how far
              your steps take you. Two inputs influence it most:{" "}
              <span className="font-medium">height</span> (your baseline step potential)
              and <span className="font-medium">pace</span> (how your steps change as you move faster / slower).
            </p>
  
            <CtaRow />
          </section>
  
          {/* Quick definitions */}
          <section className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight text-black">
              Step Length vs Stride Length (Quick Definitions)
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li>
                <span className="font-medium">Step length</span> is the distance from one foot
                to the other as you walk (e.g., right foot contact to left foot contact).
              </li>
              <li>
                <span className="font-medium">Stride length</span> is typically two steps —
                the distance from the same foot to that foot again (right foot to right foot).
              </li>
            </ul>
            <p className="mt-3 text-slate-700">
              Most consumer “steps to miles” conversions use step length as the practical unit.
            </p>
          </section>
  
          {/* Height */}
          <section className="mt-6 rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight text-black">
              How Height Impacts Step Length
            </h2>
            <p className="mt-3 text-slate-700">
              Height is strongly related to leg length, and leg length affects how much ground
              you cover per step. In general, taller people tend to take longer steps,
              while shorter people tend to take shorter steps.
            </p>
  
            <div className="mt-4 rounded-2xl border border-orange-100 bg-orange-50 p-4">
              <p className="text-sm text-slate-700">
                <span className="font-medium">Common height-based estimate:</span> step length can be
                approximated by multiplying height (in inches) by{" "}
                <span className="font-medium">0.413 (women)</span> or{" "}
                <span className="font-medium">0.415 (men)</span>. This gives an estimated step length
                in inches, which you can convert to feet by dividing by 12.
              </p>
            </div>
  
            <p className="mt-4 text-slate-700">
              That said, height is still just an estimate — biomechanics and walking style can cause
              meaningful variation even among people of the same height.
            </p>
  
            <CtaRow />
          </section>
  
          {/* Pace */}
          <section className="mt-6 rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight text-black">
              How Pace Impacts Step Length
            </h2>
  
            <p className="mt-3 text-slate-700">
              As pace increases, step length often increases too — especially when moving from
              a casual walk to a fast walk, jog, or run. Many people also increase cadence (steps per minute),
              but the distance-per-step tends to rise as speed rises.
            </p>
  
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-[560px] w-full border-collapse text-left">
                <thead>
                  <tr className="bg-orange-50 text-sm">
                    <th className="px-4 py-3 font-semibold text-slate-900">Pace Example</th>
                    <th className="px-4 py-3 font-semibold text-slate-900">What Usually Happens</th>
                    <th className="px-4 py-3 font-semibold text-slate-900">Effect on Steps per Mile</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-t border-orange-100">
                    <td className="px-4 py-3 font-medium text-slate-900">Casual walk</td>
                    <td className="px-4 py-3 text-slate-700">Shorter stride</td>
                    <td className="px-4 py-3 text-slate-700">More steps per mile</td>
                  </tr>
                  <tr className="border-t border-orange-100">
                    <td className="px-4 py-3 font-medium text-slate-900">Fast walk</td>
                    <td className="px-4 py-3 text-slate-700">Stride length increases</td>
                    <td className="px-4 py-3 text-slate-700">Fewer steps per mile</td>
                  </tr>
                  <tr className="border-t border-orange-100">
                    <td className="px-4 py-3 font-medium text-slate-900">Jog / run</td>
                    <td className="px-4 py-3 text-slate-700">Stride increases further</td>
                    <td className="px-4 py-3 text-slate-700">Even fewer steps per mile</td>
                  </tr>
                </tbody>
              </table>
            </div>
  
            <p className="mt-4 text-slate-700">
              This is why “10,000 steps” can translate to different mileage depending on whether those
              steps came from slow walking versus faster movement.
            </p>
          </section>
  
          {/* Best accuracy */}
          <section className="mt-6 rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight text-black">
              Best Way to Get an Accurate Step Length
            </h2>
            <p className="mt-3 text-slate-700">
              The most accurate approach is to measure your personal step length at your normal pace:
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
              <li>Measure a known distance (30–100 feet works well).</li>
              <li>Walk it at your normal pace and count steps.</li>
              <li>Divide distance (in feet) by steps taken = step length (in feet).</li>
            </ol>
            <p className="mt-4 text-slate-700">
              Then use the calculator’s <span className="font-medium">Known Step Length</span> option.
            </p>
  
            <CtaRow />
          </section>
  
          {/* Related */}
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
                  href="/10000-steps-in-miles"
                  className="font-medium text-orange-700 underline underline-offset-4 hover:text-orange-800"
                >
                  How many miles is 10,000 steps?
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
  