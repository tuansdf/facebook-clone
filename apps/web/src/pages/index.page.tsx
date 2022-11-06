import {
  ChatBubbleLeftIcon,
  EllipsisHorizontalIcon,
  HandThumbUpIcon,
  ShareIcon,
} from "@heroicons/react/24/solid";
import Avatar from "boring-avatars";
import Divider from "/src/features/ui/divider";
import IconButton from "/src/features/ui/icon-button";
import TextField from "/src/features/ui/text-field";

export default function IndexPage() {
  return (
    <div className="flex flex-1 items-center justify-center bg-background pt-9">
      <div className="flex w-full max-w-screen-sm flex-col gap-4 rounded-base bg-white shadow-sm">
        {/* header */}
        <div className="flex items-center justify-between p-4 pb-0">
          {/* info */}
          <div className="flex gap-2">
            {/* pic */}
            <Avatar size={45} name="hsdlfkjds" />
            {/* name */}
            <div>
              <div className="text-sm font-bold">{"hello"}</div>
              <div className="text-xs text-gray-500">11h</div>
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
          <div className="px-4">sdflksdfjlk</div>
        </div>

        {/* footer */}
        <div className="px-4">
          {/* likes */}
          <div className="mb-3 flex items-center justify-between">
            {/* left */}
            <div className="flex items-center gap-2">
              <HandThumbUpIcon className="h-5 w-5 rounded-full bg-primary p-1 text-white shadow" />
              <span className="text-sm text-gray-500">200</span>
            </div>

            {/* right */}
            <div className="flex gap-2 text-sm text-gray-500">
              <span>9 comments</span>
              <span>10 shares</span>
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
          {/* comments */}
          <div className="flex items-center gap-2 py-2">
            <Avatar size={40} name="hsdlfkjds" />
            <TextField
              fullWidth
              filled
              pill
              short
              placeholder="Write a comment..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
