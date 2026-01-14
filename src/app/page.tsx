export const metadata = {
  title: "Steps to Miles Calculator | Convert Steps to Distance",
  description:
    "Free steps to miles calculator and information. Convert step counts to miles, using averages, height, or step length methods.",
};

import Script from "next/script";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import StepsToMilesCalculator from "@/components/StepsToMilesCalculator";
import ReturnToCalculator from "@/components/ReturnToCalculator";
import EmbedToolButton from "@/components/EmbedToolButton";

const SHOW_ADS = false;

const sections = [
  { id: "calculator", label: "Calculator" },
  { id: "what", label: "What is it?" },
  { id: "how", label: "How it works" },
  { id: "methodology", label: "Methodology" },
  { id: "formula", label: "Formula" },
  { id: "charts", label: "Charts & Stats" },
  { id: "faq", label: "FAQ" },
];

const BASE_URL = "https://www.steps2miles.com";

const FAQ_ITEMS = [
  {
    q: "How many steps are in a mile?",
    a: "It depends on stride length. A common estimate is around 2,000 steps per mile, but your stride may be longer or shorter.",
  },
  {
    q: "Does my pace impact step length?",
    a: "Yes. Running typically increases step length compared to walking.",
  },
  {
    q: "Should I use height-based or step-based?",
    a: "Step-based is best if you know it. Height-based is a helpful fallback estimate.",
  },
  {
    q: "How do I calculate my step length?",
    a: "Choose a known distance, walk it at your normal pace while counting steps, then divide distance by total steps to estimate step length.",
  },
  {
    q: "What impacts step length?",
    a: "Step length is influenced by factors like height, age, gender, pace, terrain, fatigue, footwear, and general activity level.",
  },
];

export default function HomePage() {

  return (
    <div className="min-h-screen">
      <Script
  id="steps2miles-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${BASE_URL}/#org`,
          name: "Steps2Miles",
          url: BASE_URL,
        },
        {
          "@type": "WebSite",
          "@id": `${BASE_URL}/#website`,
          url: BASE_URL,
          name: "Steps2Miles",
          publisher: { "@id": `${BASE_URL}/#org` },
        },
        {
          "@type": "WebPage",
          "@id": `${BASE_URL}/#webpage`,
          url: BASE_URL,
          name: "Steps to Miles Calculator",
          description:
            "Free steps to miles calculator and information. Convert step counts to miles, using averages, height, or step length methods.",
          isPartOf: { "@id": `${BASE_URL}/#website` },
          about: { "@id": `${BASE_URL}/#software` },
        },
        {
          "@type": "SoftwareApplication",
          "@id": `${BASE_URL}/#software`,
          name: "Steps to Miles Calculator",
          applicationCategory: "HealthApplication",
          operatingSystem: "Web",
          url: BASE_URL,
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
        },
        {
          "@type": "FAQPage",
          "@id": `${BASE_URL}/#faq`,
          mainEntity: FAQ_ITEMS.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a,
            },
          })),
        },
      ],
    }),
  }}
/>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-orange-100 bg-orange-50/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link href="/" className="font-semibold tracking-tight">
            <span className="text-slate-900">Steps</span>
            <span className="text-orange-600">2</span>
            <span className="text-slate-900">Miles</span>
          </Link>

          {/* Desktop nav */}
<nav className="hidden gap-4 text-sm text-slate-700 md:flex">
  {sections.map((s) => (
    <a
      key={s.id}
      href={`#${s.id}`}
      className="hover:text-slate-900"
    >
      {s.label}
    </a>
  ))}
</nav>

{/* Mobile nav */}
<nav className="flex gap-4 text-xs font-medium text-slate-700 md:hidden">
  <a
    href="#calculator"
    className="rounded-full px-3 py-1.5 hover:bg-orange-100"
  >
    Calculator
  </a>
  <a
    href="#charts"
    className="rounded-full px-3 py-1.5 hover:bg-orange-100"
  >
    Stats
  </a>
</nav>

          <div className="flex items-center gap-3">
            <Link
              href="/about"
              className="rounded-full border border-orange-200 px-3 py-1.5 text-sm text-slate-800 hover:bg-orange-100"
            >
              About
            </Link>
          </div>
        </div>
      </header>

      {/* NEW: wider wrapper + 2-column grid */}
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* MAIN CONTENT */}
          <main className="min-w-0">
          <ReturnToCalculator />
            {/* H1 */}
            <section className="mb-10">
              <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
                <p className="mb-2 inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700">
                  Fitness &amp; Health Utilities
                </p>
                <h1 className="text-3xl font-semibold tracking-tight text-black md:text-4xl">
                  Steps to Miles Calculator
                </h1>
                <p className="mt-3 max-w-3xl text-slate-700">
                  Ever finished your day, looked at your step count and wondered,
                  &quot;how many miles did I walk today?&quot;. Curious how many
                  steps it would take to go a certain distance? Use our simple
                  tool to find out how far your steps take you.
                </p>
              </div>
            </section>

            {SHOW_ADS && (
              <div className="mb-6">
                <AdSlot
                  label="Top Leaderboard"
                  sizes="728×90 / 970×90"
                  heightClass="h-[90px]"
                />
              </div>
            )}

            {/* Calculator */}
            <section id="calculator" className="scroll-mt-24 mb-12">
              <div className="mb-3 flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">
                    Calculator
                  </h2>
                  <p className="mt-1 text-sm text-slate-600">
                    Enter steps, choose a method, and complete calculation.
                  </p>
                </div>
                <EmbedToolButton />

              </div>

              <StepsToMilesCalculator />
            </section>

            {SHOW_ADS && (
              <div className="mt-6 mb-10">
                <AdSlot
                  label="Below Calculator – Large Rectangle"
                  sizes="336×280 / 300×250"
                  heightClass="h-[280px]"
                />
              </div>
            )}

            {/* What is it */}
            <section id="what" className="scroll-mt-24 mb-10">
              <h2 className="text-xl font-semibold tracking-tight">
                What is a Steps to Miles Calculator?
              </h2>
              <p className="mt-2 text-slate-700">
                This calculator will tell you how many miles you&apos;ve walked
                or run based on the number of steps you&apos;ve taken.
              </p>
            </section>

            {/* How does it work */}
            <section id="how" className="scroll-mt-24 mb-10">
              <h2 className="text-xl font-semibold tracking-tight">
                How does our calculator work?
              </h2>
              <p className="mt-2 list-disc text-slate-700">
                Our calculator provides 3 different methods to calculate steps
                to miles - depending on how accurate you&apos;d like to be.
                However, all methods use step length in as the main input to
                translate steps to distance.
              </p>
            </section>

            {/* Methodology */}
            <section id="methodology" className="scroll-mt-24 mb-10">
              <h2 className="text-xl font-semibold tracking-tight">
                What&apos;s our Steps to Miles Methodology?
              </h2>

              <div className="mt-3 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
                <ul className="list-disc space-y-4 pl-5 text-slate-700">
                  <li>
                    <span className="font-medium">
                      Calculation based on average step length:
                    </span>{" "}
                    least accurate, but easiest to calculate.
                    <ul className="mt-2 list-disc space-y-2 pl-10 text-slate-700">
                      <li>
                        This uses the average step length for the average person
                        and applies that length to the number of steps entered
                        into the calculator.
                      </li>
                      <li>
                        <a
                          href="https://www.healthline.com/health/stride-length#average-step-and-stride-length"
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-orange-700 underline underline-offset-4 hover:text-orange-800"
                        >
                          According to the University of Iowa
                        </a>
                        , the average step length is approximately 2.2 feet for
                        women and 2.5 feet for men.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <span className="font-medium">
                      Calculation based on height:
                    </span>{" "}
                    a bit more accurate but still an estimation. This method uses
                    your height to estimate your average step length and applies
                    that value to the conversion formula.
                  </li>

                  <li>
                    <span className="font-medium">
                      Calculation based on your step length:
                    </span>{" "}
                    the most accurate method. If you know your personal step
                    length, it can be used directly to generate the most precise
                    steps-to-distance estimate for you.
                  </li>
                </ul>

                <p className="mt-5 text-sm text-slate-600">
                  <span className="font-medium">Disclaimer:</span> This
                  calculator is rooted in science and math, but is still an
                  estimate. There are more precise ways to track step count and
                  distance—such as wearable devices or specialized measurement
                  tools—but short of purchasing equipment or hiring help, this
                  provides a practical and “good enough” way to estimate steps
                  to miles.
                </p>
              </div>
            </section>

{/* Formula */}
<section id="formula" className="scroll-mt-24 mb-10">
  <h2 className="text-xl font-semibold tracking-tight">
    Formula Breakdown
  </h2>

  <div className="mt-3 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
    {/* Intro note */}
    <p className="mb-4 text-slate-700">
      <span className="font-medium">A note before we talk formulas:</span>{" "}
      Calculations like this only work if you’re using the same units for all
      inputs. Our calculator always works with <span className="font-medium">
      steps</span> and <span className="font-medium">distance</span>. While
      step length could technically be expressed in miles, that would result in
      extremely small values. To keep calculations practical and readable, we
      calculate using <span className="font-medium">feet</span> and then convert
      the final result to miles.
    </p>

    <ul className="list-disc space-y-5 pl-5 text-slate-700">
      {/* Core equation */}
      <li>
        <span className="font-medium">
          Equation to calculate steps to miles (all methods):
        </span>
        <p className="mt-2 text-sm">
          ( step length (in feet) × number of steps ) ÷ 5,280
        </p>
        <p className="mt-1 text-sm text-slate-600">
          5,280 feet = 1 mile.
        </p>
      </li>

      {/* Height-based estimation */}
      <li>
        <span className="font-medium">
          Step length estimation based on height:
        </span>{" "}
        Since height and leg length are key contributors to step length, a
        similar study found that multiplying your height (in inches) by{" "}
        <span className="font-medium">0.413 for women</span> or{" "}
        <span className="font-medium">0.415 for men</span> provides a reasonable
        step-length estimate (men tend to take slightly longer steps on average,
        even at the same height).
        <p className="mt-2 text-sm">
          <a
            href="https://marathonhandbook.com/average-stride-length/#:~:text=These%20formulas%20to%20calculate%20average%20step%20length,inches%20multiplied%20by%200.415%20equals%20step%20length."
            target="_blank"
            rel="noreferrer"
            className="font-medium text-orange-700 underline underline-offset-4 hover:text-orange-800"
          >
            A similar study
          </a>{" "}
          supports this estimation method.
        </p>
        <p className="mt-2 text-sm">
          <span className="font-medium">
            Equation based on height:
          </span>{" "}
          [ ( height (in inches) × 0.413 or 0.415 ) ÷ 12 ] × number of steps ÷
          5,280
        </p>
      </li>

      {/* Known step length */}
      <li>
        <span className="font-medium">
          Estimation based on known step length:
        </span>{" "}
        This method uses the primary equation directly, since your step length
        is already known.
        <p className="mt-2 text-sm">
          <a
            href="#faq"
            className="font-medium text-orange-700 underline underline-offset-4 hover:text-orange-800"
          >
            How to calculate step length?
          </a>{" "}
          The simplest approach is to choose a known distance (30 feet works
          well), walk it at your normal pace, and count your steps. Then divide
          distance (in feet) by steps taken. Walking, jogging, or running as you
          normally would is key for accuracy.
        </p>
      </li>
    </ul>

    {/* Closing note */}
    <p className="mt-5 text-sm text-slate-600">
      <span className="font-medium">A note on step length overall:</span>{" "}
      Averages are used because they’re the most practical way to estimate
      distance for most people. However, many factors influence step length —
      including pace, terrain, fatigue, footwear, height, age, and more.
    </p>
  </div>
</section>

            {SHOW_ADS && (
              <div className="my-8">
                <AdSlot
                  label="In-Content Rectangle"
                  sizes="300×250"
                  heightClass="h-[250px]"
                />
              </div>
            )}

{/* Charts */} <section id="charts" className="scroll-mt-24 mb-10">
  <h2 className="text-xl font-semibold tracking-tight"> Charts &amp; Stats </h2>

<div className="mt-4 space-y-4">
  {/* Chart 1 */}
  <details className="group rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
      <div>
        <h3 className="font-semibold text-black">
          Common Step Counts Converted to Distance: Miles, KM, M, YDs
        </h3>
        <p className="mt-1 text-sm text-slate-700">
          How many miles is 10,000 steps? Find this and other common step counts converted to
          distance. (Using avg step length between Female &amp; Male)
        </p>
      </div>

      <span className="shrink-0 text-4xl font-semibold text-orange-600 transition-transform group-open:rotate-180">
        ▾
      </span>
    </summary>

    <div className="mt-4 overflow-x-auto">
      <table className="min-w-[760px] w-full border-collapse text-left">
        <thead>
          <tr className="bg-orange-50 text-sm">
            <th className="px-4 py-3 font-semibold text-slate-900">Step Count</th>
            <th className="px-4 py-3 font-semibold text-slate-900">Distance: Miles</th>
            <th className="px-4 py-3 font-semibold text-slate-900">Distance: Kilometers</th>
            <th className="px-4 py-3 font-semibold text-slate-900">Distance: Meters</th>
            <th className="px-4 py-3 font-semibold text-slate-900">Distance: Yards</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {[
            { steps: "2,000", miles: "0.9", km: "1.4", m: "1,432.5", yd: "1,566.67" },
            { steps: "3,000", miles: "1.3", km: "2.1", m: "2,148.7", yd: "2,350.00" },
            { steps: "5,000", miles: "2.2", km: "3.6", m: "3,581.2", yd: "3,916.67" },
            { steps: "10,000", miles: "4.5", km: "7.2", m: "7,162.5", yd: "7,833.33" },
            { steps: "15,000", miles: "6.7", km: "10.7", m: "10,743.7", yd: "11,750.00" },
            { steps: "20,000", miles: "8.9", km: "14.3", m: "14,324.9", yd: "15,666.67" },
            { steps: "25,000", miles: "11.1", km: "17.9", m: "17,906.1", yd: "19,583.33" },
            { steps: "50,000", miles: "22.3", km: "35.8", m: "35,812.3", yd: "39,166.67" },
            { steps: "100,000", miles: "44.5", km: "71.6", m: "71,624.5", yd: "78,333.33" },
            { steps: "330,000", miles: "146.9", km: "236.4", m: "236,360.9", yd: "258,500.00" },
          ].map((row) => (
            <tr key={row.steps} className="border-t border-orange-100">
              <td className="px-4 py-3 font-medium text-slate-900">{row.steps}</td>
              <td className="px-4 py-3 text-slate-700">{row.miles}</td>
              <td className="px-4 py-3 text-slate-700">{row.km}</td>
              <td className="px-4 py-3 text-slate-700">{row.m}</td>
              <td className="px-4 py-3 text-slate-700">{row.yd}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </details>

  {/* ✅ NEW Chart 2 */}
  <details className="group rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
      <div>
        <h3 className="font-semibold text-black">
          Common Distances and their Estimated Step Counts
        </h3>
        <p className="mt-1 text-sm text-slate-700">
          How many steps are in 1 mile? How many in 3 miles? Find out common distances and their
          associated step counts. (Using avg step length between Female &amp; Male)
        </p>
      </div>

      <span className="shrink-0 text-4xl font-semibold text-orange-600 transition-transform group-open:rotate-180">
        ▾
      </span>
    </summary>

    <div className="mt-4 grid gap-6 lg:grid-cols-2">
      {/* Left table: Miles */}
      <div className="overflow-x-auto">
        <table className="min-w-[360px] w-full border-collapse text-left">
          <thead>
            <tr className="bg-orange-50 text-sm">
              <th className="px-4 py-3 font-semibold text-slate-900">Distance: Miles</th>
              <th className="px-4 py-3 font-semibold text-slate-900">Step Count</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {[
              { dist: "1", steps: "2,247" },
              { dist: "2", steps: "4,494" },
              { dist: "3", steps: "6,740" },
              { dist: "5", steps: "11,234" },
              { dist: "10", steps: "22,468" },
              { dist: "13.1 (Half Marathon)", steps: "29,433" },
              { dist: "15", steps: "33,702" },
              { dist: "18", steps: "40,443" },
              { dist: "20", steps: "44,936" },
              { dist: "22", steps: "49,430" },
              { dist: "25", steps: "56,170" },
              { dist: "26.2 (Marathon)", steps: "58,866" },
            ].map((row) => (
              <tr key={`mi-${row.dist}`} className="border-t border-orange-100">
                <td className="px-4 py-3 font-medium text-slate-900">{row.dist}</td>
                <td className="px-4 py-3 text-slate-700">{row.steps}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Right table: Kilometers */}
      <div className="overflow-x-auto">
        <table className="min-w-[360px] w-full border-collapse text-left">
          <thead>
            <tr className="bg-orange-50 text-sm">
              <th className="px-4 py-3 font-semibold text-slate-900">Distance: Kilometers</th>
              <th className="px-4 py-3 font-semibold text-slate-900">Step Count</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {[
              { dist: "1", steps: "1,396" },
              { dist: "5", steps: "6,979" },
              { dist: "10", steps: "13,957" },
              { dist: "15", steps: "20,936" },
              { dist: "20", steps: "27,915" },
              { dist: "21.1 (Half Marathon)", steps: "29,433" },
              { dist: "25", steps: "34,894" },
              { dist: "30", steps: "41,872" },
              { dist: "32", steps: "44,664" },
              { dist: "35", steps: "48,851" },
              { dist: "40", steps: "55,830" },
              { dist: "42.2 (Marathon)", steps: "58,866" },
            ].map((row) => (
              <tr key={`km-${row.dist}`} className="border-t border-orange-100">
                <td className="px-4 py-3 font-medium text-slate-900">{row.dist}</td>
                <td className="px-4 py-3 text-slate-700">{row.steps}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </details>

  {/* Chart 3 (was Chart 2) */}
  <details className="group rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
      <div>
        <h3 className="font-semibold text-black">
          Estimated Step Length by Height: Male vs Female
        </h3>
        <p className="mt-1 text-sm text-slate-700">
          Quickly lookup your height and correlated step length. (Using average height to step
          length conversion)
        </p>
      </div>
      <span className="shrink-0 text-4xl font-semibold text-orange-600 transition-transform group-open:rotate-180">
        ▾
      </span>
    </summary>

    <div className="mt-4 overflow-x-auto">
      <table className="min-w-[560px] w-full border-collapse text-left">
        <thead>
          <tr className="bg-orange-50 text-sm">
            <th className="px-4 py-3 font-semibold text-slate-900">Height</th>
            <th className="px-4 py-3 font-semibold text-slate-900">Male Step Length (ft)</th>
            <th className="px-4 py-3 font-semibold text-slate-900">Female Step Length (ft)</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {[
            { h: "4ft 6in", male: "1.87", female: "1.86" },
            { h: "4ft 7in", male: "1.90", female: "1.89" },
            { h: "4ft 8in", male: "1.94", female: "1.93" },
            { h: "4ft 9in", male: "1.97", female: "1.96" },
            { h: "4ft 10in", male: "2.01", female: "2.00" },
            { h: "4ft 11in", male: "2.04", female: "2.03" },
            { h: "5ft 0in", male: "2.08", female: "2.07" },
            { h: "5ft 1in", male: "2.11", female: "2.10" },
            { h: "5ft 2in", male: "2.14", female: "2.13" },
            { h: "5ft 3in", male: "2.18", female: "2.17" },
            { h: "5ft 4in", male: "2.21", female: "2.20" },
            { h: "5ft 5in", male: "2.25", female: "2.24" },
            { h: "5ft 6in", male: "2.28", female: "2.27" },
            { h: "5ft 7in", male: "2.32", female: "2.31" },
            { h: "5ft 8in", male: "2.35", female: "2.34" },
            { h: "5ft 9in", male: "2.39", female: "2.37" },
            { h: "5ft 10in", male: "2.42", female: "2.41" },
            { h: "5ft 11in", male: "2.46", female: "2.44" },
            { h: "6ft 0in", male: "2.49", female: "2.48" },
            { h: "6ft 1in", male: "2.52", female: "2.51" },
            { h: "6ft 2in", male: "2.56", female: "2.55" },
            { h: "6ft 3in", male: "2.59", female: "2.58" },
            { h: "6ft 4in", male: "2.63", female: "2.62" },
            { h: "6ft 5in", male: "2.66", female: "2.65" },
            { h: "6ft 6in", male: "2.70", female: "2.68" },
          ].map((row) => (
            <tr key={row.h} className="border-t border-orange-100">
              <td className="px-4 py-3 font-medium text-slate-900">{row.h}</td>
              <td className="px-4 py-3 text-slate-700">{row.male}</td>
              <td className="px-4 py-3 text-slate-700">{row.female}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </details>

  {/* Chart 4 (was Chart 3) */}
  <details className="group rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
      <div>
        <h3 className="font-semibold text-black">
          Pace impact on step length and step count
        </h3>
        <p className="mt-1 text-sm text-slate-700">
          An ACSM study showed that step length increased when pace increased. Use this chart to
          see the differences in step count and length for 1 mile at various paces.
        </p>
      </div>
      <span className="shrink-0 text-4xl font-semibold text-orange-600 transition-transform group-open:rotate-180">
        ▾
      </span>
    </summary>

    <div className="mt-4 overflow-x-auto">
      <table className="min-w-[560px] w-full border-collapse text-left">
        <thead>
          <tr className="bg-orange-50 text-sm">
            <th className="px-4 py-3 font-semibold text-slate-900">Pace</th>
            <th className="px-4 py-3 font-semibold text-slate-900">Steps for 1 Mile</th>
            <th className="px-4 py-3 font-semibold text-slate-900">Average Step Length (ft)</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {[
            { pace: "Walking: 20 min/mile", steps: "2,250", length: "2.35" },
            { pace: "Jogging: 12 min/mile", steps: "1,875", length: "2.82" },
            { pace: "Moderate Run: 10 min/mile", steps: "1,600", length: "3.30" },
            { pace: "Run: 8 min/mile", steps: "1,400", length: "3.77" },
            { pace: "Fast Run: 6 min/mile", steps: "1,064", length: "4.96" },
          ].map((row) => (
            <tr key={row.pace} className="border-t border-orange-100">
              <td className="px-4 py-3 font-medium text-slate-900">{row.pace}</td>
              <td className="px-4 py-3 text-slate-700">{row.steps}</td>
              <td className="px-4 py-3 text-slate-700">{row.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </details>

  {/* Chart 5 (was Chart 4) */}
  <details className="group rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
      <div>
        <h3 className="font-semibold text-black">Daily Step Recommendations</h3>
        <p className="mt-1 text-sm text-slate-700">
          How many steps should you take a day? These are general daily step recommendations based
          on age, fitness level, and health goals.
        </p>
      </div>
      <span className="shrink-0 text-4xl font-semibold text-orange-600 transition-transform group-open:rotate-180">
        ▾
      </span>
    </summary>

    <div className="mt-4 text-sm text-slate-700">
      <p className="mb-3">
        Data is derived from a{" "}
        <a
          href="https://www.thelancet.com/journals/lanpub/article/PIIS2468-2667(21)00302-9/fulltext"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-orange-700 underline underline-offset-4 hover:text-orange-800"
        >
          Lancet Public Health
        </a>{" "}
        meta-analysis of 15 studies examining daily step volume and health outcomes.
      </p>

      <ul className="list-disc space-y-2 pl-5">
        <li>
          For general fitness, most adults should aim for between{" "}
          <span className="font-medium">8,000–10,000 steps per day</span>.
        </li>
        <li>
          The study suggests that{" "}
          <span className="font-medium">7,500 or more steps per day</span> was significantly
          associated with greater weight loss and improved health markers.
        </li>
        <li>
          For improved fitness, step volume isn’t the only factor — increasing pace or difficulty
          (walking faster or uphill) contributes to greater fitness.
        </li>
        <li>
          Age plays a role: teens and tweens may benefit from{" "}
          <span className="font-medium">11,000–12,000 steps per day</span>, while adults aged 60+ are
          recommended <span className="font-medium">6,000–8,000.</span>
        </li>
      </ul>
    </div>
  </details>
</div>
</section>

{/* People Also Ask */}
<section id="people-also-ask" className="scroll-mt-24 mb-12">
  <h2 className="text-xl font-semibold tracking-tight">
    Common Questions About Steps to Miles
  </h2>

  <p className="mt-2 text-slate-700 max-w-3xl">
    Quick, plain-English answers to the most common “how many miles is X steps?”
    questions — plus what affects accuracy.
  </p>

  <div className="mt-6 space-y-8 max-w-3xl">
    {/* Q1 */}
    <div>
      <h2 className="text-lg font-semibold text-slate-900">
        How many miles is 10,000 steps?
      </h2>
      <p className="mt-2 text-slate-700">
        On average, <span className="font-medium">10,000 steps is about 4.5–5 miles</span>.
        The exact number depends on your step length: shorter steps convert to fewer miles,
        and longer steps convert to more. For the most accurate result, use the
        <span className="font-medium"> known step length</span> method in the calculator.
      </p>
    </div>

    {/* Q2 */}
    <div>
      <h2 className="text-lg font-semibold text-slate-900">
        How many miles is 7,500 steps?
      </h2>
      <p className="mt-2 text-slate-700">
        A common estimate is <span className="font-medium">7,500 steps ≈ 3.3–3.8 miles</span>.
        Height, pace, terrain, and personal stride length can all push this number higher or lower.
      </p>
    </div>

    {/* Q3 */}
    <div>
      <h2 className="text-lg font-semibold text-slate-900">
        How many miles is 5,000 steps?
      </h2>
      <p className="mt-2 text-slate-700">
        For most people, <span className="font-medium">5,000 steps is around 2.2–2.5 miles</span>.
        Shorter strides fall closer to the low end, while longer strides increase distance.
      </p>
    </div>

    {/* Q4 */}
    <div>
      <h2 className="text-lg font-semibold text-slate-900">
        How many miles is 20,000 steps?
      </h2>
      <p className="mt-2 text-slate-700">
        On average, <span className="font-medium">20,000 steps equals about 9–10 miles</span>.
        This varies significantly person-to-person because step length plays a major role.
      </p>
    </div>

    {/* Q5 */}
    <div>
      <h2 className="text-lg font-semibold text-slate-900">
        Are steps-to-miles different for men and women?
      </h2>
      <p className="mt-2 text-slate-700">
        They can be. On average, men tend to have slightly longer step length than women,
        even at the same height. That said, the
        <span className="font-medium"> biggest factor is individual stride</span> —
        height, pace, and biomechanics matter more than gender alone.
      </p>
    </div>

    {/* Q6 */}
    <div>
      <h2 className="text-lg font-semibold text-slate-900">
        Does height affect how many miles your steps equal?
      </h2>
      <p className="mt-2 text-slate-700">
        Yes. Taller people generally have longer legs and longer strides, so each step covers
        more ground. This is why height-based calculations are more accurate than generic averages —
        though measuring your <span className="font-medium">actual step length</span> is best.
      </p>
    </div>

    {/* Q7 */}
    <div>
      <h2 className="text-lg font-semibold text-slate-900">
        How accurate are steps-to-miles calculators?
      </h2>
      <p className="mt-2 text-slate-700">
        They’re accurate enough for everyday use, but still estimates. Accuracy is highest when
        using your <span className="font-medium">known step length</span>. General averages are
        less precise because pace, fatigue, terrain, footwear, and walking vs. running all
        affect stride length.
      </p>
    </div>
  </div>
</section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-24 mb-10">
              <h2 className="text-xl font-semibold tracking-tight">FAQ</h2>
              <div className="mt-4 space-y-3">
                {[
                  {
                    q: "How many steps are in a mile?",
                    a: (
                      <p>
                        It depends on stride length. A common estimate is ~2,000
                        steps per mile, but your stride may be longer or shorter.
                      </p>
                    ),
                  },
                  {
                    q: "Does my pace impact step length?",
                    a: (
                      <p>
                        Yes. The{" "}
                        <a
                          href="https://oce.ovid.com/article/00135124-200801000-00007/HTML"
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-orange-700 underline underline-offset-4 hover:text-orange-800"
                        >
                          American College of Sports Medicine
                        </a>{" "}
                        found that running step length usually increases compared
                        to walking.
                      </p>
                    ),
                  },
                  {
                    q: "Should I use height-based or step-based?",
                    a: (
                      <p>
                        Step-based is best if you know it. Height-based is a
                        helpful fallback estimate.
                      </p>
                    ),
                  },
                  {
                    q: "How do I calculate my step length?",
                    a: (
                      <p>
                        It&apos;s best to use a flat stretch of road, trail,
                        track, or other surface. Choose a start and end point
                        and measure the distance between the two. Walk, jog, or
                        run (depending on the pace you&apos;re measuring),
                        counting your steps. Then divide the distance by total
                        steps — that’s your step length.
                      </p>
                    ),
                  },
                  {
                    q: "What impacts step length?",
                    a: (
                      <p>
                        Research in the{" "}
                        <a
                          href="https://link.springer.com/article/10.1186/s13023-021-01956-5"
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-orange-700 underline underline-offset-4 hover:text-orange-800"
                        >
                          Orphanet Journal of Rare Diseases
                        </a>{" "}
                        found that step length depends on: age, height, gender,
                        pace, and general activity level.
                      </p>
                    ),
                  },
                ].map((item) => (
                  <details
                    key={item.q}
                    className="rounded-2xl border border-orange-100 bg-white p-4 shadow-sm"
                  >
                    <summary className="cursor-pointer select-none font-medium text-slate-900">
                      {item.q}
                    </summary>
                    <div className="mt-2 text-slate-700">{item.a}</div>
                  </details>
                ))}
              </div>
            </section>

            {/* Mini About */}
            <section id="about" className="scroll-mt-24 mb-6">
              <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold tracking-tight text-black">
                  Mini About Us
                </h2>
                <p className="mt-2 text-slate-700">
                  We created our steps to miles calculator from a love of fitness
                  &amp; movement, and creating helpful websites. Our goal is to
                  help people with their every day searches with the things
                  we&apos;re passionate about. We are former D1 athletes, fitness
                  lovers, competitors, husbands, wives, enrepreneurs, marketers,
                  curious and above all kind. This site is a part of the ads4good
                  Network.
                </p>
                <div className="mt-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center rounded-full bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700"
                  >
                    Read more about Steps2Miles here
                  </Link>
                </div>
              </div>
            </section>

            {SHOW_ADS && (
              <div className="my-8">
                <AdSlot
                  label="Bottom Rectangle"
                  sizes="300×250"
                  heightClass="h-[250px]"
                />
              </div>
            )}

            {/* References */}
            <section id="references" className="mt-12 scroll-mt-24">
              <h2 className="text-xl font-semibold tracking-tight">
                References &amp; Sources
              </h2>

              <ul className="mt-4 space-y-4 text-sm text-slate-700">
                <li>
                  <a
                    href="https://www.thelancet.com/journals/lanpub/article/PIIS2468-2667(21)00302-9/fulltext"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-orange-700 underline underline-offset-4 hover:text-orange-800"
                  >
                    Daily step volume and health outcomes: a meta-analysis of 15
                    studies
                  </a>
                  . <span className="italic">The Lancet Public Health</span>,
                  2021. Used to inform daily step count recommendations across
                  age and health profiles.
                </li>

                <li>
                  <a
                    href="https://oce.ovid.com/article/00135124-200801000-00007/HTML"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-orange-700 underline underline-offset-4 hover:text-orange-800"
                  >
                    Effects of walking and running pace on step length and step
                    frequency
                  </a>
                  . <span className="italic">ACSM Health &amp; Fitness Journal</span>.
                  Used to support the relationship between pace and step length
                  variation.
                </li>

                <li>
                  <a
                    href="https://link.springer.com/article/10.1186/s13023-021-01956-5"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-orange-700 underline underline-offset-4 hover:text-orange-800"
                  >
                    Normative data on spontaneous stride velocity, stride length,
                    and walking activity in real-world environments
                  </a>
                  . <span className="italic">Orphanet Journal of Rare Diseases</span>,
                  2021. Used to support variability in step length by age,
                  height, and movement velocity.
                </li>

                <li>
                  <a
                    href="https://ouhsc.edu/bserdac/dthompso/web/gait/knmatics/step.htm"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-orange-700 underline underline-offset-4 hover:text-orange-800"
                  >
                    Biomechanics of gait: step length and pace relationships
                  </a>
                  . University of Oklahoma Health Sciences Center. Used to
                  support mechanical explanations of how pace influences step
                  length.
                </li>

                <li>
                  <a
                    href="https://www.healthline.com/health/step-length#average-step-and-step-length"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-orange-700 underline underline-offset-4 hover:text-orange-800"
                  >
                    Average step length and stride length norms
                  </a>
                  . Healthline (citing University of Iowa research). Used for
                  average step length estimates for men and women.
                </li>

                <li>
                  <a
                    href="https://marathonhandbook.com/average-stride-length/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-orange-700 underline underline-offset-4 hover:text-orange-800"
                  >
                    Average stride length by height
                  </a>
                  . Marathon Handbook. Used for height-based step length
                  estimation formulas.
                </li>

                <li>
                  <a
                    href="https://www.chparks.com/411/How-To-Measure-Steps"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-orange-700 underline underline-offset-4 hover:text-orange-800"
                  >
                    How to measure step length
                  </a>
                  . Cleveland Heights Parks &amp; Recreation. Used for practical
                  guidance on measuring individual step length.
                </li>
              </ul>
            </section>

            <footer className="py-10 text-center text-xs text-slate-500">
              © {new Date().getFullYear()} Steps2Miles • Built for Good via
              ads4Good
            </footer>

          </main>

          {/* RIGHT RAIL (DESKTOP ONLY) */}
          <aside className="hidden lg:block">
            {SHOW_ADS && (
              <AdSlot
                label="Sticky Right Rail"
                sizes="300×600 / 160×600"
                heightClass="h-[600px]"
                sticky
              />
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}

