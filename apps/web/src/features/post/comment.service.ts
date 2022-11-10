import { ICreateCommentDto } from "shared-types";
import axiosInstance from "/src/configs/axios.config";

const commentService = {
  create: async (data: ICreateCommentDto, postId: string) => {
    return (await axiosInstance.post(`/comments?postId=${postId}`, data)).data;
  },
};

export default commentService;
