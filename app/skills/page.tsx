import { FadeInStagger, FadeInStaggerItem } from '@/components/FadeIn';
import { skillGroups } from '@/lib/skills';

export default function SkillsPage() {
  return (
    <FadeInStagger className="space-y-12">
      <FadeInStaggerItem>
        <h1 className="text-3xl font-semibold tracking-tight mb-2">Skills</h1>
        <p className="text-fg-muted text-sm sm:text-base">
          A toolbox of technologies and languages I use to build robust and scalable applications.
        </p>
      </FadeInStaggerItem>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillGroups.map((group) => (
          <FadeInStaggerItem key={group.category} className="space-y-4">
            <h2 className="text-sm font-medium text-fg-muted uppercase tracking-wider border-b border-border pb-2">
              {group.category}
            </h2>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg border border-border bg-bg-card/50 text-sm font-medium hover:border-fg-muted transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </FadeInStaggerItem>
        ))}
      </div>
    </FadeInStagger>
  );
}
