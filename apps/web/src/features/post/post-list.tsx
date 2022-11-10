import { IPost } from "shared-types";
import PostCard from "/src/features/post/post-card";

interface Props {
  posts: IPost[];
}
export default function PostList({ posts }: Props) {
  return (
    <div className="grid w-full gap-4">
      {posts.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  );
}
