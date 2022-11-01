import axios from "axios";
import {
  ICreateUserDto,
  IErrorResponse,
  IJwtResponse,
  ILoginUserDto,
} from "shared-types";
import create from "zustand";
import { persist } from "zustand/middleware";
import authService from "/src/features/auth/auth.service";

interface IOptions {
  onSuccess?: () => void;
  onError?: () => void;
}

interface IAuthState {
  user: IJwtResponse | null;
  isAuth: () => boolean;

  isLoading: boolean;
  error: IErrorResponse | null;

  login: (data: ILoginUserDto, options?: IOptions) => void;
  register: (data: ICreateUserDto, options?: IOptions) => void;
  logout: () => void;
}

const useAuthStore = create(
  persist<IAuthState>(
    (set, get) => ({
      user: null,
      isLoading: false,
      error: null,
      isAuth: () => {
        return !!get().user?.accessToken;
      },
      login: async (data: ILoginUserDto, options?: IOptions) => {
        set({ isLoading: true, error: null });
        try {
          const user = await authService.login(data);
          set({ isLoading: false, user });
          options?.onSuccess?.();
        } catch (error) {
          if (axios.isAxiosError(error)) {
            set({ isLoading: false, error: error.response?.data });
          }
          options?.onError?.();
        }
      },
      register: async (data: ICreateUserDto, options?: IOptions) => {
        set({ isLoading: true, error: null });
        try {
          const user = await authService.register(data);
          set({ isLoading: false, user });
          options?.onSuccess?.();
        } catch (error) {
          if (axios.isAxiosError(error)) {
            set({ isLoading: false, error: error.response?.data });
          }
          options?.onError?.();
        }
      },
      logout: () => set({ user: null }),
    }),
    { name: "auth" }
  )
);

export default useAuthStore;
