export const metadata = {
    title: "Privacy Policy | Steps2Miles",
    description:
      "Privacy Policy for Steps2Miles (steps2miles.com). Learn what data we collect, how we use it, and your choices.",
  };
  
  import Link from "next/link";
  
  const BASE_URL = "https://www.steps2miles.com";
  
  export default function PrivacyPolicyPage() {
    const updated = "February 11, 2026";
  
    return (
      <div className="min-h-screen">
        {/* Header (simple + consistent) */}
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
              Privacy Policy
            </h1>
  
            <p className="mt-2 text-sm text-slate-600">Last updated: {updated}</p>
  
            <p className="mt-5 text-slate-700">
              This Privacy Policy explains how Steps2Miles (“Steps2Miles”, “we”,
              “us”) collects, uses, and shares information when you visit{" "}
              <a
                href={BASE_URL}
                className="font-medium text-orange-700 underline underline-offset-4 hover:text-orange-800"
              >
                {BASE_URL.replace("https://", "")}
              </a>{" "}
              (the “Site”).
            </p>
          </div>
  
          <div className="mt-6 space-y-6">
            {/* Overview */}
            <section className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold tracking-tight text-black">
                Quick Summary
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                <li>
                  We may collect basic usage data (like pages viewed and device
                  info) to improve the Site.
                </li>
                <li>
                  If ads are enabled, ad partners may use cookies or similar
                  technologies to personalize and measure ads.
                </li>
                <li>
                  We do not ask you to create an account and we do not sell your
                  personal information in exchange for money.
                </li>
                <li>
                  You can control cookies via your browser settings and, where
                  applicable, ad personalization settings.
                </li>
              </ul>
            </section>
  
            {/* Information we collect */}
            <section className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold tracking-tight text-black">
                Information We Collect
              </h2>
  
              <h3 className="mt-4 font-semibold text-slate-900">
                1) Information you provide
              </h3>
              <p className="mt-2 text-slate-700">
                If you contact us (for example, via a contact form or email), we
                may collect the information you choose to share such as your name,
                email address, and message content.
              </p>
  
              <h3 className="mt-5 font-semibold text-slate-900">
                2) Automatic information (usage + device)
              </h3>
              <p className="mt-2 text-slate-700">
                Like most websites, we may automatically collect limited
                information about how the Site is accessed and used, such as:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                <li>IP address (often used to approximate location at city/state level)</li>
                <li>Browser type and device characteristics</li>
                <li>Pages viewed, time on page, and referring/exit pages</li>
                <li>General diagnostics and performance data</li>
              </ul>
  
              <h3 className="mt-5 font-semibold text-slate-900">
                3) Cookies and similar technologies
              </h3>
              <p className="mt-2 text-slate-700">
                We and our partners may use cookies, pixels, and similar
                technologies to operate the Site, understand usage, and (if enabled)
                display and measure advertising.
              </p>
            </section>
  
            {/* How we use */}
            <section className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold tracking-tight text-black">
                How We Use Information
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                <li>Operate and maintain the Site</li>
                <li>Improve content, usability, and performance</li>
                <li>Respond to messages and support requests</li>
                <li>Prevent fraud, abuse, and security incidents</li>
                <li>
                  If advertising is enabled: serve, measure, and improve ads
                  (including frequency capping and reporting)
                </li>
              </ul>
            </section>
  
            {/* Advertising */}
            <section className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold tracking-tight text-black">
                Advertising &amp; Analytics
              </h2>
              <p className="mt-2 text-slate-700">
                We may use third-party analytics providers to understand Site
                usage. We may also display ads through third-party networks. These
                partners may collect information via cookies or similar
                technologies to provide and measure services.
              </p>
              <p className="mt-3 text-slate-700">
                If you see ads on the Site, you may be able to control
                personalization through your browser settings and (where
                applicable) the ad provider’s controls.
              </p>
            </section>
  
            {/* Sharing */}
            <section className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold tracking-tight text-black">
                How We Share Information
              </h2>
              <p className="mt-2 text-slate-700">
                We may share information in the following situations:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                <li>
                  <span className="font-medium">Service providers:</span> vendors
                  who help us run the Site (hosting, analytics, email).
                </li>
                <li>
                  <span className="font-medium">Legal and safety:</span> if required
                  by law, or to protect rights, safety, and security.
                </li>
                <li>
                  <span className="font-medium">Business transfers:</span> if we are
                  involved in a merger, acquisition, or asset sale.
                </li>
              </ul>
            </section>
  
            {/* Your choices */}
            <section className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold tracking-tight text-black">
                Your Choices
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                <li>
                  <span className="font-medium">Cookies:</span> you can usually
                  disable cookies in your browser settings. Note that some site
                  features may not work properly without cookies.
                </li>
                <li>
                  <span className="font-medium">Do Not Track:</span> some browsers
                  offer “Do Not Track” signals. There is no consistent industry
                  standard for responding to these signals.
                </li>
              </ul>
            </section>
  
            {/* Data retention */}
            <section className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold tracking-tight text-black">
                Data Retention
              </h2>
              <p className="mt-2 text-slate-700">
                We retain information only as long as reasonably necessary for the
                purposes described in this policy, unless a longer retention
                period is required by law.
              </p>
            </section>
  
            {/* Children */}
            <section className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold tracking-tight text-black">
                Children’s Privacy
              </h2>
              <p className="mt-2 text-slate-700">
                The Site is not intended for children under 13. We do not knowingly
                collect personal information from children under 13.
              </p>
            </section>
  
            {/* Contact */}
            <section className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold tracking-tight text-black">
                Contact Us
              </h2>
              <p className="mt-2 text-slate-700">
                Questions about this Privacy Policy? Reach us via the{" "}
                <Link
                  href="/contact"
                  className="font-medium text-orange-700 underline underline-offset-4 hover:text-orange-800"
                >
                  contact page
                </Link>
                .
              </p>
            </section>
  
            {/* Footer links */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <Link
                href="/terms"
                className="rounded-full border border-orange-200 px-3 py-1.5 hover:bg-orange-50"
              >
                Terms &amp; Disclaimer
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
  