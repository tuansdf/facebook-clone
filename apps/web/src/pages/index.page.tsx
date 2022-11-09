import { useQuery } from "react-query";
import { IErrorResponse, IPost } from "shared-types";
import CreatePostForm from "/src/features/post/create-post-form";
import PostList from "/src/features/post/post-list";
import postService from "/src/features/post/post.service";

export default function IndexPage() {
  const postsQuery = useQuery<IPost[], IErrorResponse>(
    ["posts"],
    postService.getAll
  );

  if (postsQuery.isLoading) return <div>Loading...</div>;
  if (postsQuery.isError) return <div>Error...</div>;
  if (!postsQuery.data?.length) return null;

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 bg-background pt-9">
      <div className="w-full max-w-screen-sm space-y-4">
        <CreatePostForm />
        <PostList posts={postsQuery.data} />
      </div>
    </div>
  );
}
