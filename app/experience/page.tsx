import { FadeInStagger, FadeInStaggerItem } from "@/components/FadeIn";

const jobs = [
  {
    title: "Senior Frontend Engineer",
    company: "Acme Corp",
    period: "2023 — Present",
    bullets: [
      "Led migration from legacy React SPA to Next.js App Router, increasing organic traffic 40%.",
      "Designed a new component library following WCAG 2.1 AA accessibility standards.",
      "Mentored junior engineers and ran bi-weekly frontend guild meetings.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Stark Industries",
    period: "2020 — 2023",
    bullets: [
      "Developed core features for the internal analytics dashboard (React + Tailwind).",
      "Optimized heavy data visualizations, reducing page load from 5s to under 1s.",
      "Collaborated with designers to ensure pixel-perfect UI implementations.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Wayne Enterprises",
    period: "Summer 2019",
    bullets: [
      "Built an internal component library with Storybook for cross-platform consistency.",
      "Wrote unit tests with Jest and React Testing Library, boosting coverage by 20%.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <FadeInStagger className="space-y-8">
      <FadeInStaggerItem>
        <h1 className="text-3xl font-semibold tracking-tight mb-2">Experience</h1>
        <p className="text-[var(--fg-muted)] text-sm sm:text-base">
          My professional journey building scalable systems and polished products.
        </p>
      </FadeInStaggerItem>

      <div className="flex flex-col gap-10">
        {jobs.map((job, i) => (
          <FadeInStaggerItem key={i} className="relative pl-5 border-l border-[var(--border)]">
            {/* Timeline dot */}
            <div className="absolute w-2.5 h-2.5 rounded-full border-2 border-[var(--fg-muted)] bg-[var(--bg)] -left-[5.5px] top-1.5" />

            <div className="mb-3">
              <h3 className="text-base font-semibold text-[var(--fg)]">{job.title}</h3>
              <p className="text-sm text-[var(--fg-muted)] mt-0.5">
                {job.company}
                <span className="mx-2 opacity-40">·</span>
                {job.period}
              </p>
            </div>
            <ul className="space-y-1.5 text-sm text-[var(--fg-muted)] list-disc pl-4">
              {job.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </FadeInStaggerItem>
        ))}
      </div>
    </FadeInStagger>
  );
}
