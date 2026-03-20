import { FadeInStagger, FadeInStaggerItem } from '@/components/FadeIn';
import { getBlogPostBySlug } from '@/lib/blogs';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : null;

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  return (
    <FadeInStagger className="space-y-8">
      <FadeInStaggerItem>
        <Link to="/blogs" className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-white transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Writing
        </Link>
        <h1 className="text-4xl font-bold mb-4 leading-tight">{post.title}</h1>
        <div className="text-fg-muted mb-8">
          {new Date(post.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </FadeInStaggerItem>

      <FadeInStaggerItem>
        <div className="prose prose-invert prose-p:text-fg-muted prose-headings:text-white prose-a:text-white hover:prose-a:opacity-80 prose-strong:text-white prose-li:text-fg-muted prose-pre:bg-[#121212] prose-pre:border prose-pre:border-border prose-hr:border-border max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </FadeInStaggerItem>
    </FadeInStagger>
  );
}
