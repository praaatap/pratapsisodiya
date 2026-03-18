import { FadeInStagger, FadeInStaggerItem } from '@/components/FadeIn';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/blogs';

export default function BlogsPage() {
  const posts = getBlogPosts();

  return (
    <FadeInStagger className="space-y-8">
      <FadeInStaggerItem>
        <h1 className="text-3xl font-semibold tracking-tight mb-2">Writing</h1>
        <p className="text-[var(--fg-muted)] text-sm sm:text-base">
          Musings on software engineering, design, and continuous learning.
        </p>
      </FadeInStaggerItem>

      <div className="flex flex-col divide-y divide-[var(--border)]">
        {posts.map((post) => (
          <FadeInStaggerItem key={post.slug}>
            <Link
              href={`/blogs/${post.slug}`}
              className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-5 hover:opacity-80 transition-opacity"
            >
              <h3 className="text-base font-medium text-[var(--fg)] group-hover:underline underline-offset-4 decoration-[var(--fg-muted)]">
                {post.title}
              </h3>
              <span className="text-sm text-[var(--fg-muted)] shrink-0">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </Link>
          </FadeInStaggerItem>
        ))}
        {posts.length === 0 && (
          <FadeInStaggerItem>
            <p className="text-[var(--fg-muted)] py-5">No posts published yet.</p>
          </FadeInStaggerItem>
        )}
      </div>
    </FadeInStagger>
  );
}
