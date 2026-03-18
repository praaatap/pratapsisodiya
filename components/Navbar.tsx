import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--bg)]/80 backdrop-blur-md border-b border-[var(--border)]">
      <nav className="max-w-2xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg hover:opacity-80 transition-opacity">
          pratap.
        </Link>
        <div className="flex items-center gap-5 text-sm font-medium text-[var(--fg-muted)]">
          <Link href="/projects" className="hover:text-[var(--fg)] transition-colors">
            Projects
          </Link>
          <Link href="/blogs" className="hover:text-[var(--fg)] transition-colors">
            Blogs
          </Link>
          <Link href="/experience" className="hover:text-[var(--fg)] transition-colors">
            Experience
          </Link>
        </div>
      </nav>
    </header>
  );
}
