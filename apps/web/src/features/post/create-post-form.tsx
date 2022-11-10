import {
  FaceSmileIcon,
  PhotoIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import Avatar from "boring-avatars";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { ICreatePostDto, IErrorResponse, IPost } from "shared-types";
import useAuthStore from "/src/features/auth/auth.store";
import postService from "/src/features/post/post.service";
import Divider from "/src/features/ui/divider";
import TextField from "/src/features/ui/text-field";

export default function CreatePostForm() {
  const user = useAuthStore((state) => state.user);

  const { register, handleSubmit, reset } = useForm<ICreatePostDto>();

  const queryClient = useQueryClient();

  const postMutation = useMutation<IPost, IErrorResponse, ICreatePostDto>(
    (data) => postService.create(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
        reset();
      },
    }
  );

  const onSubmit: SubmitHandler<ICreatePostDto> = (data) => {
    postMutation.mutate(data);
  };

  return (
    <div className="w-full space-y-2 rounded-base bg-white py-2 px-3 shadow">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-2"
      >
        <div>
          <Avatar size={45} name={user?.firstName} />
        </div>
        <TextField
          fullWidth
          filled
          pill
          short
          placeholder={`What's on your mind, ${user?.firstName}?`}
          {...register("body")}
        />
      </form>
      <Divider />
      <div className="grid grid-cols-3 place-content-center text-sm font-bold text-gray-500">
        <div className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-base py-2 transition-colors hover:bg-gray-100">
          <VideoCameraIcon className="h-6 w-6 text-red-500" />
          <span>Live video</span>
        </div>
        <div className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-base py-2 transition-colors hover:bg-gray-100">
          <PhotoIcon className="h-6 w-6 text-green-500" />
          <span>Photo/video</span>
        </div>
        <div className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-base py-2 transition-colors hover:bg-gray-100">
          <FaceSmileIcon className="h-6 w-6 text-yellow-500" />
          <span>Feeling/Activity</span>
        </div>
      </div>
    </div>
  );
}
