import { ICreatePostDto } from "shared-types";
import axiosInstance from "/src/configs/axios.config";

const postService = {
  getAll: async () => {
    return (await axiosInstance.get("/posts")).data;
  },
  create: async (data: ICreatePostDto) => {
    return (await axiosInstance.post("/posts", data)).data;
  },
};

export default postService;
