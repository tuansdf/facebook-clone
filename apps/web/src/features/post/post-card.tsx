import {
  ChatBubbleLeftIcon,
  EllipsisHorizontalIcon,
  HandThumbUpIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import { HandThumbUpIcon as HandThumbUpIconSolid } from "@heroicons/react/24/solid";
import Avatar from "boring-avatars";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { IPost } from "shared-types";
import useAuthStore from "/src/features/auth/auth.store";
import Divider from "/src/features/ui/divider";
import IconButton from "/src/features/ui/icon-button";
import TextField from "/src/features/ui/text-field";

dayjs.extend(relativeTime);

interface Props {
  post: IPost;
}

export default function PostCard({ post }: Props) {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="flex w-full flex-col gap-4 rounded-base bg-white shadow-sm">
      {/* header */}
      <div className="flex items-center justify-between p-4 pb-0">
        {/* info */}
        <div className="flex gap-2">
          {/* pic */}
          <Avatar size={45} name={post.user?.firstName} />
          {/* name */}
          <div>
            <div className="text-sm font-bold">{post.user?.firstName}</div>
            <div className="text-xs text-gray-500">
              {dayjs().to(dayjs(post.created))}
            </div>
          </div>
        </div>

        {/* more */}
        <div>
          <IconButton Icon={<EllipsisHorizontalIcon className="h-6 w-6" />} />
        </div>
      </div>

      {/* body */}
      <div>
        {/* text */}
        <div className="px-4">{post.body}</div>
      </div>

      {/* footer */}
      <div className="px-4">
        {/* likes */}
        <div className="mb-3 flex items-center justify-between">
          {/* left */}
          <div className="flex items-center gap-2">
            <HandThumbUpIconSolid className="h-5 w-5 rounded-full bg-primary p-1 text-white shadow" />
            <span className="text-sm text-gray-500">{post.numLikes}</span>
          </div>

          {/* right */}
          <div className="flex gap-2 text-sm text-gray-500">
            <span>{post.numComments} comments</span>
            <span>{post.numShares} shares</span>
          </div>
        </div>
        <Divider />
        {/* actions */}
        <div className="my-1 grid grid-cols-3 place-items-center text-sm font-bold text-gray-500">
          <div className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-base py-1.5 transition-colors hover:bg-gray-100">
            <HandThumbUpIcon className="h-5 w-5" />
            <span>Like</span>
          </div>
          <div className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-base py-1.5 transition-colors hover:bg-gray-100">
            <ChatBubbleLeftIcon className="h-5 w-5" />
            <span>Comment</span>
          </div>
          <div className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-base py-1.5 transition-colors hover:bg-gray-100">
            <ShareIcon className="h-5 w-5" />
            <span>Share</span>
          </div>
        </div>
        <Divider />
        {/* add comment */}
        <div className="flex items-center gap-2 py-2">
          <div>
            <Avatar size={40} name={user?.firstName} />
          </div>
          <TextField
            fullWidth
            filled
            pill
            short
            placeholder="Write a comment..."
          />
        </div>

        {/* comments */}
        {post.comments?.length ? (
          <div className="mt-4 mb-2 grid gap-4">
            {post.comments?.map((comment) => (
              <div className="flex gap-3">
                <div>
                  <Avatar size={40} name={user?.firstName} />
                </div>
                <div className="rounded-xl bg-gray-100 px-2 py-1.5 text-sm">
                  <span className="cursor-pointer font-bold">
                    {comment.user?.firstName}
                  </span>
                  <p className="overflow-hidden text-ellipsis text-gray-900">
                    {comment.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
