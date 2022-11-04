import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ILoginUserDto } from "shared-types";
import useAuthStore from "/src/features/auth/auth.store";
import Button from "/src/features/ui/button";
import Link from "/src/features/ui/link";
import TextField from "/src/features/ui/text-field";

export default function LoginForm() {
  const { register, handleSubmit } = useForm<ILoginUserDto>();

  const loginUser = useAuthStore((state) => state.login);
  const isLoading = useAuthStore((state) => state.isLoading);
  const error = useAuthStore((state) => state.error);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ILoginUserDto> = (data) => {
    loginUser(data, { onSuccess: () => navigate("/") });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col items-center gap-4"
    >
      <div className="w-full space-y-3">
        <TextField
          placeholder="Email"
          bordered
          fullWidth
          type="text"
          {...register("email", { required: true })}
        />

        <TextField
          placeholder="Password"
          bordered
          fullWidth
          type="password"
          {...register("password", { required: true })}
        />
      </div>
      <div className="w-full space-y-2 text-center">
        <Button isLoading={isLoading} filled fullWidth>
          Log in
        </Button>
        {error ? (
          <div className="text-sm text-red-500">{error.message}</div>
        ) : null}
      </div>
      <Link href="https://www.google.com">Forgotten password?</Link>
    </form>
  );
}
