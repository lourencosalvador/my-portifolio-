import { getBlogPosts, getPost } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { DATA } from "@/data/resume";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.04}>
          <div className="mb-8">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-purple-400 transition-colors duration-300 group"
            >
              <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Blog
            </Link>
          </div>
        </BlurFade>

        <article className="prose prose-gray dark:prose-invert max-w-none">
          <BlurFade delay={0.08}>
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-3">
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  {post.metadata.category} {post.metadata.emoji}
                </Badge>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
                {post.metadata.title}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {post.metadata.summary}
              </p>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-border pt-6">
                <div className="flex items-center gap-2">
                  <Avatar className="size-8">
                    <AvatarImage src={DATA.avatarUrl} alt={DATA.name} />
                    <AvatarFallback>{DATA.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center gap-1">
                    <User className="size-3" />
                    {post.metadata.author}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="size-3" />
                  {formatDate(post.metadata.publishedAt)}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="size-3" />
                  {post.metadata.readingTime} min read
                </div>
              </div>
            </div>
          </BlurFade>
          
          <BlurFade delay={0.12}>
            <div className="prose prose-gray dark:prose-invert max-w-none prose-headings:scroll-mt-24 prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:leading-relaxed prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-code:bg-gray-100 prose-code:text-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded dark:prose-code:bg-gray-800 dark:prose-code:text-gray-200">
              <div dangerouslySetInnerHTML={{ __html: post.source }} />
            </div>
          </BlurFade>
        </article>
      </div>
    </div>
  );
}
