// Layout for the public content pages.
//
// The AdSense loader lives here rather than in the root layout so that /embed —
// which is served inside iframes on other people's sites — never loads ad code.
// Pages inside this route group serve ads; pages outside it do not. The
// parentheses mean the folder name does not appear in any URL.
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* AdSense loader (content pages only, once) */}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1296305798175078"
        crossOrigin="anonymous"
      />
      {children}
    </>
  );
}
