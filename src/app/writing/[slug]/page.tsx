import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { writingPosts, WritingSlug } from "@/content/writing";
import { SectionHeading } from "@/components/section-heading";
import { loadMdxComponent } from "@/lib/mdx";

type Params = { slug: WritingSlug };

export function generateStaticParams() {
  return writingPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = writingPosts.find((item) => item.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function WritingPostPage({ params }: { params: Params }) {
  const post = writingPosts.find((item) => item.slug === params.slug);
  if (!post) {
    notFound();
  }

  const Post = await loadMdxComponent(params.slug);

  return (
    <div className="mx-auto w-full max-w-4xl px-6 pb-20">
      <div className="space-y-10">
        <SectionHeading
          eyebrow={post.date}
          title={post.title}
          description={post.excerpt}
        />
        <article className="space-y-6 text-sm leading-7 text-foreground/80 [&_h1]:font-display [&_h1]:text-3xl [&_h1]:tracking-tight [&_h2]:font-display [&_h2]:text-2xl [&_h2]:tracking-tight [&_a]:text-[#31543e] [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:pl-5">
          <Post />
        </article>
      </div>
    </div>
  );
}
