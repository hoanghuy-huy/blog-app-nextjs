import { FeaturedPosts, HomeCoverSection, RecentPost } from '@/components/coreUI';
import { Blog } from '@/types';
import { allBlogs } from 'contentlayer/generated';
export default function Home() {
  return (
    <main className="mb-10">
      <HomeCoverSection blogs={allBlogs as Blog[]} />
      <FeaturedPosts blogs={allBlogs as Blog[]} />
      <RecentPost blogs={allBlogs as Blog[]} />
    </main>
  );
}
