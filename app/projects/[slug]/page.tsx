import { FadeInStagger, FadeInStaggerItem } from "@/components/FadeIn";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <FadeInStagger className="space-y-10">
      <FadeInStaggerItem>
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-(--color-notion-text-muted) hover:text-white transition-colors border-none! mb-8">
          <ArrowLeft size={16} /> Back to Projects
        </Link>
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-(--color-notion-text-muted)">{project.description}</p>
      </FadeInStaggerItem>

      <FadeInStaggerItem className="flex gap-4">
        <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-(--color-notion-hover) border border-(--color-border) rounded-md text-sm hover:bg-white hover:text-black transition-colors border-none!">
          <ExternalLink size={16} /> Live Demo
        </a>
        <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 text-(--color-notion-text-muted) border border-(--color-border) rounded-md text-sm hover:text-white transition-colors border-none!">
          <Github size={16} /> Source Code
        </a>
      </FadeInStaggerItem>

      <FadeInStaggerItem className="space-y-4 pt-8 border-t border-(--color-border)">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-(--color-notion-text-muted) leading-relaxed">
          {project.title} was built to solve specific challenges encountered during regular development workflows.
          It focuses on providing a clean, distraction-free environment while maintaining powerful under-the-hood capabilities.
          The primary goal was to maximize performance and ensure a seamless user experience.
        </p>
      </FadeInStaggerItem>

      <FadeInStaggerItem className="space-y-4">
        <h2 className="text-2xl font-semibold">Technologies Used</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 pl-0 list-none">
          {project.tags.map(tag => (
            <li key={tag} className="bg-(--color-background) border border-(--color-border) px-3 py-2 rounded-md text-sm text-center text-(--color-notion-text-muted)">
              {tag}
            </li>
          ))}
        </ul>
      </FadeInStaggerItem>
    </FadeInStagger>
  );
}
