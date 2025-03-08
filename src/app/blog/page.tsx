import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import Image from "next/image";
import Gloss from '@/../public/glass.svg'
import ImageCode from '@/../public/code.png'

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <Image 
        src={Gloss} 
        alt="pattern background" 
        className="absolute inset-0 w-full h-full object-cover -z-30"
      />
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">Blog</h1>
      </BlurFade>

      <div className="max-h-[45rem] overflow-auto scrollbar-none">
        {posts
          .flatMap((post) => Array(4).fill(post)) 
          .sort((a, b) => 
            new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
          )
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={`${post.slug}-${id}`}>
              <Link
                className="flex flex-col space-y-1 mb-4"
                href={`/blog/${post.slug}`}
              >
                <div className="w-full flex flex-col">
                  <p className="tracking-tight">{post.metadata.title}</p>
                  <p className="h-6 text-xs text-muted-foreground">
                    {post.metadata.publishedAt}
                  </p>
                </div>
                <div className="w-full h-[18rem] rounded-lg bg-blue-800 overflow-hidden">
                  <Image src={ImageCode} alt="code" className="object-cover w-full h-full"/>
                </div>
              </Link>
            </BlurFade>
          ))}
      </div>
    </section>
  );
}


