export const metadata = {
    title: "Terms & Disclaimer | Steps2Miles",
    description:
      "Terms of use and disclaimer for Steps2Miles (steps2miles.com), including accuracy notes, medical disclaimer, and third-party links.",
  };
  
  import Link from "next/link";
  
  const BASE_URL = "https://www.steps2miles.com";
  
  export default function TermsPage() {
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
              Legal
            </p>
  
            <h1 className="text-3xl font-semibold tracking-tight text-black md:text-4xl">
              Terms &amp; Disclaimer
            </h1>
  
            <p className="mt-2 text-sm text-slate-600">Last updated: {updated}</p>
  
            <p className="mt-5 text-slate-700">
              These Terms &amp; Disclaimer (“Terms”) govern your use of{" "}
              <a
                href={BASE_URL}
                className="font-medium text-orange-700 underline underline-offset-4 hover:text-orange-800"
              >
                {BASE_URL.replace("https://", "")}
              </a>{" "}
              (the “Site”). By using the Site, you agree to these Terms.
            </p>
          </div>
  
          <div className="mt-6 space-y-6">
            {/* Terms of use */}
            <section className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold tracking-tight text-black">
                1) Using the Site
              </h2>
              <p className="mt-2 text-slate-700">
                You may use the Site for personal, non-commercial purposes. Please
                don’t misuse the Site, attempt to disrupt its operation, or use it
                in a way that violates applicable laws.
              </p>
            </section>
  
            {/* Disclaimer */}
            <section className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold tracking-tight text-black">
                2) Calculator Disclaimer (Estimates)
              </h2>
              <p className="mt-2 text-slate-700">
                The Steps2Miles calculator provides{" "}
                <span className="font-medium">estimates</span>. Results vary by
                individual because step length depends on factors such as height,
                pace, terrain, fatigue, footwear, biomechanics, and whether you’re
                walking or running.
              </p>
              <p className="mt-3 text-slate-700">
                For the best accuracy, use the method based on{" "}
                <span className="font-medium">your known step length</span> and
                measure it at your normal pace.
              </p>
            </section>
  
            {/* Not medical advice */}
            <section className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold tracking-tight text-black">
                3) Not Medical or Professional Advice
              </h2>
              <p className="mt-2 text-slate-700">
                The Site is provided for general informational purposes only and
                does not provide medical, health, legal, or professional advice.
                If you have health concerns, consult a qualified professional.
              </p>
            </section>
  
            {/* No warranties */}
            <section className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold tracking-tight text-black">
                4) No Warranties
              </h2>
              <p className="mt-2 text-slate-700">
                The Site is provided “as is” and “as available.” We make no
                warranties regarding accuracy, reliability, availability, or
                fitness for a particular purpose.
              </p>
            </section>
  
            {/* Limitation of liability */}
            <section className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold tracking-tight text-black">
                5) Limitation of Liability
              </h2>
              <p className="mt-2 text-slate-700">
                To the fullest extent permitted by law, Steps2Miles will not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages arising out of or related to your use of the Site.
              </p>
            </section>
  
            {/* Third-party links */}
            <section className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold tracking-tight text-black">
                6) Third-Party Links
              </h2>
              <p className="mt-2 text-slate-700">
                The Site may link to third-party websites for reference or
                convenience. We do not control these sites and are not responsible
                for their content, policies, or practices.
              </p>
            </section>
  
            {/* Ads + affiliate disclosure (AdSense-friendly) */}
            <section className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold tracking-tight text-black">
                7) Advertising &amp; Affiliate Disclosure
              </h2>
              <p className="mt-2 text-slate-700">
                We may display advertisements on the Site. Ad networks may use
                cookies or similar technologies to show and measure ads.
              </p>
              <p className="mt-3 text-slate-700">
                We may also include affiliate links from time to time. If you
                click an affiliate link and make a purchase, we may earn a small
                commission at no additional cost to you. We only recommend
                products or services we believe are useful for the Site’s purpose.
              </p>
            </section>
  
            {/* Changes */}
            <section className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold tracking-tight text-black">
                8) Changes to These Terms
              </h2>
              <p className="mt-2 text-slate-700">
                We may update these Terms periodically. Updates will be posted on
                this page with a revised “Last updated” date.
              </p>
            </section>
  
            {/* Contact */}
            <section className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold tracking-tight text-black">
                9) Contact
              </h2>
              <p className="mt-2 text-slate-700">
                Questions about these Terms? Contact us via{" "}
                <Link
                  href="/contact"
                  className="font-medium text-orange-700 underline underline-offset-4 hover:text-orange-800"
                >
                  the contact page
                </Link>
                .
              </p>
            </section>
  
            {/* Footer links */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <Link
                href="/privacy-policy"
                className="rounded-full border border-orange-200 px-3 py-1.5 hover:bg-orange-50"
              >
                Privacy Policy
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-orange-200 px-3 py-1.5 hover:bg-orange-50"
              >
                Contact
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-orange-200 px-3 py-1.5 hover:bg-orange-50"
              >
                About
              </Link>
            </div>
          </div>
  
          <footer className="py-10 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Steps2Miles • Built for Good via ads4Good
          </footer>
        </main>
      </div>
    );
  }
  