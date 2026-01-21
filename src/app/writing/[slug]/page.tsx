import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { writingPosts, writingBySlug, WritingSlug } from "@/content/writing";
import { SectionHeading } from "@/components/section-heading";

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
  const loader = writingBySlug[params.slug];
  if (!loader) {
    notFound();
  }
  const Post = (await loader()).default;
  const post = writingPosts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-6 pb-20">
      <div className="space-y-10">
        <SectionHeading
          eyebrow={post.date}
          title={post.title}
          description={post.excerpt}
        />
        <article className="space-y-6 text-sm text-foreground/80 [&_h1]:text-2xl [&_h1]:font-semibold [&_h1]:tracking-tight [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_a]:text-sky-600 [&_ul]:list-disc [&_ul]:pl-5">
          <Post />
        </article>
      </div>
    </div>
  );
}
