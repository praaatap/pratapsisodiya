import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 py-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-[var(--fg-muted)]">
        © {new Date().getFullYear()} Pratap Singh — Built with Next.js
      </p>
      <div className="flex items-center gap-4">
        <Link
          href="https://github.com/praaatap"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
        >
          <Github size={16} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/singhpratap999/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
        >
          <Linkedin size={16} />
        </Link>
        <Link
          href="https://x.com/itspratap9"
          target="_blank"
          rel="noreferrer"
          aria-label="X / Twitter"
          className="text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
        >
          <Twitter size={16} />
        </Link>
      </div>
    </footer>
  );
}
