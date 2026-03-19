import { FadeInStagger, FadeInStaggerItem } from '@/components/FadeIn';
import { skillGroups } from '@/lib/skills';

const skillToIcon: Record<string, string> = {
  "TypeScript": "ts",
  "JavaScript": "js",
  "Python": "py",
  "Go": "go",
  "Java": "java",
  "Kotlin": "kotlin",
  "Swift": "swift",
  "C++": "cpp",
  "React": "react",
  "Next.js": "nextjs",
  "Flutter": "flutter",
  "TailwindCSS": "tailwind",
  "Node.js": "nodejs",
  "Express": "express",
  "FastAPI": "fastapi",
  "PostgreSQL": "postgres",
  "MongoDB": "mongodb",
  "Redis": "redis",
  "Firebase": "firebase",
  "Appwrite": "appwrite",
  "GraphQL": "graphql",
  "REST API": "postman",
  "Git": "git",
  "Docker": "docker",
  "AWS": "aws",
  "Google Cloud": "gcp",
  "Vercel": "vercel",
  "Linux": "linux",
  "CI/CD": "githubactions",
  "Postman": "postman"
};

export default function Skills() {
  return (
    <FadeInStagger className="space-y-16 pb-24">
      <FadeInStaggerItem className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Skills</h1>
        <p className="text-fg-muted max-w-xl text-lg leading-relaxed">
          Technical expertise and tools I utilize to build modern, high-performance applications.
        </p>
      </FadeInStaggerItem>

      <div className="space-y-12">
        {skillGroups.map((group) => (
          <FadeInStaggerItem key={group.category} className="space-y-6">
            <h2 className="text-xs font-semibold text-fg-muted uppercase tracking-[0.2em] border-l-2 border-border pl-4">
              {group.category}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {group.skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-border bg-bg-card/30 hover:bg-bg-hover hover:border-fg-muted/30 transition-all cursor-default"
                >
                  <div className="relative w-6 h-6 shrink-0">
                    {skillToIcon[skill] && (
                      <img
                        src={`https://skillicons.dev/icons?i=${skillToIcon[skill]}`}
                        alt={skill}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                  <span className="text-sm font-medium text-fg truncate">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </FadeInStaggerItem>
        ))}
      </div>
    </FadeInStagger>
  );
}
