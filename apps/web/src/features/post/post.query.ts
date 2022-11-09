import { useQuery } from "react-query";
import { IErrorResponse, IPost } from "shared-types";
import postService from "/src/features/post/post.service";

export const usePostQuery = () => {
  const query = useQuery<IPost[], IErrorResponse>(["post"], postService.getAll);

  return query;
};
