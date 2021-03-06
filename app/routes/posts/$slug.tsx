import { LoaderFunction, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import { getPost, Post } from "~/modules/post";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expected params.slug");
  return getPost(params.slug);
};

export default function PostSlug() {
  const post = useLoaderData<Post>();
  return (
    <div>
      <h1>
        {post.title} - {post.slug}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}
