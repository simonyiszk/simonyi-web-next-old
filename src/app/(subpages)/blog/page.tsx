import { Metadata } from 'next';
import { Locales } from '~/@types';
import { BlogPostPreview } from '~/components';
import { getPosts } from '~/utils';

export const dynamic = 'auto';

export const metadata: Metadata = {
  title: 'Blog'
};

async function getData() {
  const locale: Locales = 'hu';

  const posts = await getPosts(locale);

  return { posts: posts.filter((post) => !post.hidden) };
}

export default async function Page() {
  const { posts } = await getData();

  return (
    <div className="flex-grow self-center p-4 flex flex-col gap-8 w-full max-w-3xl">
      {posts.map((post) => {
        return <BlogPostPreview key={post.slug} data={post} />;
      })}
    </div>
  );
}
