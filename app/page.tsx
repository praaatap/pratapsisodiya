import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { FadeInStagger, FadeInStaggerItem } from "@/components/FadeIn";

export default function Home() {
  return (
    <FadeInStagger className="space-y-14">
      {/* ── Intro ───────────────────────────────────── */}
      <FadeInStaggerItem>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
          Hi, I'm Pratap 👋
        </h1>
        <p className="text-[var(--fg-muted)] text-base sm:text-lg leading-relaxed max-w-lg">
          I'm a developer who enjoys building clean, efficient, and user-friendly
          web applications. Welcome to my corner of the internet — I write about
          code, design, and things I'm learning.
        </p>

        {/* Socials */}
        <div className="flex items-center gap-3 mt-6">
          {[
            { href: "https://github.com/praaatap", icon: <Github size={18} />, label: "GitHub" },
            { href: "https://www.linkedin.com/in/singhpratap999/", icon: <Linkedin size={18} />, label: "LinkedIn" },
            { href: "https://x.com/itspratap9", icon: <Twitter size={18} />, label: "X" },
            { href: "mailto:hello@pratap.dev", icon: <Mail size={18} />, label: "Email" },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={label}
              className="flex items-center gap-1.5 text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors px-3 py-1.5 rounded-md hover:bg-[var(--bg-hover)]"
            >
              {icon}
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </div>
      </FadeInStaggerItem>

      {/* ── Now / Focus ─────────────────────────────── */}
      <FadeInStaggerItem>
        <h2 className="text-xs uppercase tracking-widest text-[var(--fg-muted)] font-medium mb-5">
          Explore
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              href: "/projects",
              title: "Projects",
              desc: "Shipped things, open-source work, and experiments.",
            },
            {
              href: "/blogs",
              title: "Writing",
              desc: "Notes on engineering, design, and continuous learning.",
            },
            {
              href: "/experience",
              title: "Experience",
              desc: "Professional journey and roles I've held.",
            },
          ].map(({ href, title, desc }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col gap-1 py-3 px-3 -mx-3 rounded-lg hover:bg-[var(--bg-hover)] transition-colors"
            >
              <span className="font-medium text-[var(--fg)] text-sm group-hover:underline underline-offset-4 decoration-[var(--fg-muted)]">
                {title} →
              </span>
              <span className="text-xs text-[var(--fg-muted)] leading-relaxed">
                {desc}
              </span>
            </Link>
          ))}
        </div>
      </FadeInStaggerItem>
    </FadeInStagger>
  );
}
