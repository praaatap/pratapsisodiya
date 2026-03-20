import { Link } from "react-router-dom";
import { FadeIn } from "@/components/FadeIn";

export default function NotFound() {
  return (
    <FadeIn className="flex flex-col items-start gap-4 py-16">
      <h1 className="text-6xl font-bold text-fg-muted">404</h1>
      <p className="text-xl text-fg">Page not found</p>
      <p className="text-fg-muted">The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="mt-4 px-4 py-2 rounded-md border border-border text-sm hover:bg-bg-hover transition-colors"
      >
        ← Back home
      </Link>
    </FadeIn>
  );
}
