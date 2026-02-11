export const metadata = {
    title: "Contact | Steps2Miles",
    description:
      "Contact Steps2Miles (steps2miles.com). Questions, feedback, corrections, or partnership inquiries — reach out here.",
  };
  
  import Link from "next/link";
  
  const BASE_URL = "https://www.steps2miles.com";
  
  // ✅ Update this to your preferred inbox (or keep as-is for now)
  const CONTACT_EMAIL = "info@ads4good.com";
  
  export default function ContactPage() {
    const updated = "February 11, 2026";
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "Steps2Miles — Question / Feedback"
    )}`;
  
    return (
      <div className="min-h-screen">
        {/* Header (consistent) */}
        <header className="sticky top-0 z-50 border-b border-orange-100 bg-orange-50/80 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <Link href="/" className="font-semibold tracking-tight">
              <span className="text-slate-900">Steps</span>
              <span className="text-orange-600">2</span>
              <span className="text-slate-900">Miles</span>
            </Link>
  
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="rounded-full border border-orange-200 px-3 py-1.5 text-sm text-slate-800 hover:bg-orange-100"
              >
                Back to Calculator
              </Link>
            </div>
          </div>
        </header>
  
        <main className="mx-auto max-w-5xl px-4 py-10">
          <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
            <p className="mb-2 inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700">
              Support
            </p>
  
            <h1 className="text-3xl font-semibold tracking-tight text-black md:text-4xl">
              Contact
            </h1>
  
            <p className="mt-2 text-sm text-slate-600">Last updated: {updated}</p>
  
            <p className="mt-5 text-slate-700">
              Have a question about the calculator, want to report an issue, or
              suggest an improvement? Reach out — we read everything.
            </p>
          </div>
  
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {/* Primary contact card */}
            <section className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold tracking-tight text-black">
                Email Us
              </h2>
  
              <p className="mt-2 text-slate-700">
                The fastest way to reach us is email:
              </p>
  
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href={mailto}
                  className="inline-flex items-center justify-center rounded-full bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700"
                >
                  Email the Steps2Miles crew
                </a>
  
              </div>
  
              <p className="mt-5 text-sm text-slate-600">
                We typically respond within a few business days.
              </p>
            </section>
  
            {/* What to include */}
            <section className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold tracking-tight text-black">
                If You Found a Calculator Issue - What to Include
              </h2>
  
              <p className="mt-2 text-slate-700">
                To help us reply quickly, include:
              </p>
  
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                <li>The step count and method you used (Average / Height / Known step length)</li>
                <li>Your height and/or step length (if relevant)</li>
                <li>What result you expected vs what you saw</li>
                <li>Your device + browser (optional)</li>
                <li>
                  A screenshot helps a lot
                  (optional)
                </li>
              </ul>
            </section>
          </div>
  
          {/* Small legal / links */}
          <section className="mt-6 rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight text-black">
              Partnerships &amp; Content Requests
            </h2>
            <p className="mt-2 text-slate-700">
              If you’re reaching out about partnerships, sponsorships, or content
              updates, please include the page URL and a short description of what
              you’re proposing.
            </p>
  
            <p className="mt-4 text-sm text-slate-600">
              Related pages:{" "}
              <Link
                href="/privacy-policy"
                className="font-medium text-orange-700 underline underline-offset-4 hover:text-orange-800"
              >
                Privacy Policy
              </Link>
              {" • "}
              <Link
                href="/terms"
                className="font-medium text-orange-700 underline underline-offset-4 hover:text-orange-800"
              >
                Terms &amp; Disclaimer
              </Link>
              {" • "}
              <Link
                href="/about"
                className="font-medium text-orange-700 underline underline-offset-4 hover:text-orange-800"
              >
                About
              </Link>
            </p>
          </section>
  
          <footer className="py-10 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Steps2Miles • Built for Good via ads4Good
          </footer>
        </main>
      </div>
    );
  }
  