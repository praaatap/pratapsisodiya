import { FadeInStagger, FadeInStaggerItem } from '@/components/FadeIn';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/blogs';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <FadeInStagger className="space-y-8">
      <FadeInStaggerItem>
        <Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-(--color-notion-text-muted) hover:text-white transition-colors border-none! mb-8">
          <ArrowLeft size={16} /> Back to Writing
        </Link>
        <h1 className="text-4xl font-bold mb-4 leading-tight">{post.title}</h1>
        <div className="text-(--color-notion-text-muted) mb-8">
          {new Date(post.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </FadeInStaggerItem>

      <FadeInStaggerItem>
        {/* We use Tailwind Typography to style the markdown */}
        <div className="prose prose-invert prose-p:text-(--color-notion-text-muted) prose-headings:text-white prose-a:text-white hover:prose-a:opacity-80 prose-strong:text-white prose-li:text-(--color-notion-text-muted) prose-pre:bg-[#121212] prose-pre:border prose-pre:border-(--color-border) prose-hr:border-(--color-border) max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </FadeInStaggerItem>
    </FadeInStagger>
  );
}
