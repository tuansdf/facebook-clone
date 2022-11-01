import { ICreateUserDto, IJwtResponse, ILoginUserDto } from "shared-types";
import axiosInstance from "/src/configs/axios.config";

const authService = {
  login: async (data: ILoginUserDto): Promise<IJwtResponse> => {
    return (await axiosInstance.post("/auth/login", data)).data;
  },
  register: async (data: ICreateUserDto): Promise<IJwtResponse> => {
    return (await axiosInstance.post("/auth/register", data)).data;
  },
};

export default authService;
