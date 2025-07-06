import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

export const metadata = {
  title: "Blog",
  description: "Thoughts on software development, React, Next.js, and building amazing digital experiences.",
};

const BLUR_FADE_DELAY = 0.04;

// Default blog image for posts without custom images
const DEFAULT_BLOG_IMAGES = [
  "/blog/nextjs-performance.jpg",
  "/blog/ui-cloning.jpg", 
  "/blog/react-native-prebuild.jpg"
];

export default async function BlogPage() {
  const posts = await getBlogPosts();
  
  return (
    <div className="max-w-2xl mx-auto w-full">
      <section>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
            
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-shadow-glow">
                Latest Posts
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto"></div>
            </div>
          </div>
        </BlurFade>
        
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="space-y-6">
            {posts.map((post, id) => (
              <BlurFade
                key={post.slug}
                delay={BLUR_FADE_DELAY * 3 + id * 0.05}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="glass-effect backdrop-blur-sm border border-white/20 hover:border-purple-500/50 transition-all duration-300 p-6 rounded-xl blog-card relative group">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                            {post.metadata.category} {post.metadata.emoji}
                          </Badge>
                          <span className="text-sm text-muted-foreground">•</span>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="size-3" />
                            {formatDate(post.metadata.publishedAt)}
                          </div>
                        </div>
                        
                        <h2 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                          {post.metadata.title}
                        </h2>
                        
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {post.metadata.summary}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="size-3" />
                            {post.metadata.readingTime} min read
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="size-3" />
                            {post.metadata.author}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </BlurFade>
      </section>
    </div>
  );
}


