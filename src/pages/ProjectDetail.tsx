import { FadeInStagger, FadeInStaggerItem } from "@/components/FadeIn";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { projects } from "@/lib/projects";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.id === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <FadeInStagger className="space-y-10">
      <FadeInStaggerItem>
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-white transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Projects
        </Link>
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-fg-muted">{project.description}</p>
      </FadeInStaggerItem>

      <FadeInStaggerItem className="flex gap-4">
        <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-bg-hover border border-border rounded-md text-sm hover:bg-white hover:text-black transition-colors">
          <ExternalLink size={16} /> Live Demo
        </a>
        <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 text-fg-muted border border-border rounded-md text-sm hover:text-white transition-colors">
          <Github size={16} /> Source Code
        </a>
      </FadeInStaggerItem>

      <FadeInStaggerItem className="space-y-4 pt-8 border-t border-border">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-fg-muted leading-relaxed">
          {project.title} was built to solve specific challenges encountered during regular development workflows.
          It focuses on providing a clean, distraction-free environment while maintaining powerful under-the-hood capabilities.
          The primary goal was to maximize performance and ensure a seamless user experience.
        </p>
      </FadeInStaggerItem>

      <FadeInStaggerItem className="space-y-4">
        <h2 className="text-2xl font-semibold">Technologies Used</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 pl-0 list-none">
          {project.tags.map(tag => (
            <li key={tag} className="bg-bg border border-border px-3 py-2 rounded-md text-sm text-center text-fg-muted">
              {tag}
            </li>
          ))}
        </ul>
      </FadeInStaggerItem>
    </FadeInStagger>
  );
}
