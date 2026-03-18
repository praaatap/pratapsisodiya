import { FadeInStagger, FadeInStaggerItem } from '@/components/FadeIn';
import Link from 'next/link';
import { projects } from '@/lib/projects';

export default function ProjectsPage() {
  // Extract unique categories, defaulting to 'Other' if not present
  const categories = Array.from(new Set(projects.map(p => (p as any).category || 'Other')));

  return (
    <FadeInStagger className="space-y-12">
      <FadeInStaggerItem>
        <h1 className="text-3xl font-semibold tracking-tight mb-2">Projects</h1>
        <p className="text-[var(--fg-muted)] text-sm sm:text-base">
          A selection of personal and open-source projects I&apos;ve been working on, categorized by technology.
        </p>
      </FadeInStaggerItem>

      <div className="space-y-10">
        {categories.map((category) => (
          <FadeInStaggerItem key={category as string}>
            <h2 className="text-sm font-medium text-[var(--fg-muted)] uppercase tracking-wider mb-4 border-b border-[var(--border)] pb-2">
              {category as string}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {projects.filter(p => ((p as any).category || 'Other') === category).map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="group flex flex-col justify-between h-full py-4 px-3 -mx-3 rounded-lg hover:bg-[var(--bg-hover)] transition-colors"
                >
                  <div>
                    <h3 className="font-medium text-[var(--fg)] mb-2 group-hover:underline underline-offset-4 decoration-[var(--fg-muted)]">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-md bg-[var(--tag-bg)] text-[var(--fg-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </FadeInStaggerItem>
        ))}
      </div>
    </FadeInStagger>
  );
}
