import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy text-cream/70 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-serif text-cream text-lg font-bold mb-2">Blueprint Political</p>
            <p className="text-sm leading-relaxed">Your campaign. Built to win.</p>
          </div>
          <nav className="flex flex-col gap-2">
            <Link href="/services" className="text-sm hover:text-cream transition-colors">Services</Link>
            <Link href="/about" className="text-sm hover:text-cream transition-colors">About</Link>
            <Link href="/pricing" className="text-sm hover:text-cream transition-colors">Pricing</Link>
            <Link href="/resources" className="text-sm hover:text-cream transition-colors">Resources</Link>
            <Link href="/work-with-me" className="text-sm hover:text-cream transition-colors">Work With Me</Link>
          </nav>
          <div className="text-sm">
            <a href="mailto:carolyvella@gmail.com" className="hover:text-cream transition-colors">
              carolyvella@gmail.com
            </a>
          </div>
        </div>
        <div className="border-t border-cream/10 pt-6 text-xs text-cream/40 space-y-1">
          <p>Blueprint Political is an Arkansas-based political consulting practice. Carol Vella works with Democratic, independent, and nonpartisan candidates.</p>
          <p>© 2025 Blueprint Political</p>
        </div>
      </div>
    </footer>
  );
}
