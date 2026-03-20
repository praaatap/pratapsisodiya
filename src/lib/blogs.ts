import matter from 'gray-matter';

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

// Import all markdown files as raw strings at build time
const blogFiles = import.meta.glob('../content/blogs/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export function getBlogPosts(): BlogPost[] {
  const posts = Object.entries(blogFiles).map(([filePath, rawContent]) => {
    const slug = filePath.replace(/^.*\/([^/]+)\.md$/, '$1');
    const { data, content } = matter(rawContent);
    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      excerpt: data.excerpt as string,
      content,
    };
  });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const entry = Object.entries(blogFiles).find(([filePath]) =>
    filePath.endsWith(`/${slug}.md`)
  );
  if (!entry) return null;
  const [, rawContent] = entry;
  const { data, content } = matter(rawContent);
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    content,
  };
}
