import { FadeInStagger, FadeInStaggerItem } from "@/components/FadeIn";

const jobs = [
  {
    title: "Software Engineer",
    company: "Krunk AI",
    period: "Feb 2026 — Present",
    type: "Internship",
    location: "Remote",
    skills: "LangChain, LangGraph and +12 skills",
    bullets: [
      "Developing agentic AI workflows and intelligent automation systems using LangChain and LangGraph.",
      "Building scalable software infrastructure in a remote-first engineering environment.",
      "Collaborating on cutting-edge AI features and performance optimizations.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Xoidlabs",
    period: "Jan 2026 — Mar 2026",
    type: "Internship",
    location: "Remote",
    skills: "Software Infrastructure, Software Industry and +8 skills",
    bullets: [
      "Focused on software infrastructure and industry best practices for robust application development.",
      "Contributed to enhancing system reliability and backend performance benchmarks.",
      "Applied modern engineering standards to complex infrastructure challenges.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Axuore Technologies",
    period: "Nov 2025 — Feb 2026",
    type: "Internship",
    location: "Pune District, Maharashtra, India · Remote",
    skills: "Software Infrastructure, Software Design and +7 skills",
    bullets: [
      "Leveraged software design principles to build efficient and maintainable application architectures.",
      "Participated in the full software development lifecycle from design to deployment.",
      "Focused on building scalable and performant software solutions.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <FadeInStagger className="space-y-8">
      <FadeInStaggerItem>
        <h1 className="text-3xl font-semibold tracking-tight mb-2">Experience</h1>
        <p className="text-fg-muted text-sm sm:text-base">
          My professional journey building scalable systems and polished products.
        </p>
      </FadeInStaggerItem>

      <div className="flex flex-col gap-10">
        {jobs.map((job, i) => (
          <FadeInStaggerItem key={i} className="relative pl-5 border-l border-border">
            {/* Timeline dot */}
            <div className="absolute w-2.5 h-2.5 rounded-full border-2 border-fg-muted bg-bg -left-[5.5px] top-1.5" />

            <div className="mb-3">
              <h3 className="text-base font-semibold text-fg">
                {job.title} <span className="text-fg-muted font-normal text-sm ml-1">({job.type})</span>
              </h3>
              <div className="text-sm text-fg-muted mt-1 flex flex-wrap items-center gap-y-1">
                <span>{job.company}</span>
                <span className="mx-2 opacity-40">·</span>
                <span>{job.period}</span>
                {job.location && (
                  <>
                    <span className="mx-2 opacity-40">·</span>
                    <span>{job.location}</span>
                  </>
                )}
              </div>
              <div className="text-xs font-medium text-fg mt-2 opacity-90">
                Skills: {job.skills}
              </div>
            </div>
            <ul className="space-y-1.5 text-sm text-fg-muted list-disc pl-4">
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
