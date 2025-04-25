import { PATH } from '@/config';

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <div>My Post: {PATH.BLOGS.SLUG(slug)}</div>;
}
