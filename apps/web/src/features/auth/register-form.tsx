import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ICreateUserDto } from "shared-types";
import useAuthStore from "/src/features/auth/auth.store";
import Button from "/src/features/ui/button";
import TextField from "/src/features/ui/text-field";

export default function RegisterForm() {
  const { register, handleSubmit } = useForm<ICreateUserDto>();

  const registerUser = useAuthStore((state) => state.register);
  const isLoading = useAuthStore((state) => state.isLoading);
  const error = useAuthStore((state) => state.error);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ICreateUserDto> = (data) => {
    registerUser(data, { onSuccess: () => navigate("/") });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid w-full gap-3">
      <div className="grid grid-cols-2 gap-3">
        <TextField
          type="text"
          placeholder="First name"
          bordered
          filled
          fullWidth
          short
          {...register("firstName", { required: true })}
        />
        <TextField
          type="text"
          placeholder="Last name"
          bordered
          filled
          fullWidth
          short
          {...register("lastName", { required: true })}
        />
      </div>
      <TextField
        type="email"
        placeholder="Email adress"
        bordered
        filled
        fullWidth
        short
        {...register("email", { required: true })}
      />
      <TextField
        type="text"
        placeholder="Username"
        bordered
        filled
        fullWidth
        short
        {...register("username", { required: true })}
      />
      <TextField
        type="password"
        placeholder="New password"
        bordered
        filled
        fullWidth
        short
        {...register("password", { required: true })}
      />
      <div className="text-xs text-gray-500">
        People who use our service may have uploaded your contact information to
        Facebook.{" "}
        <span className="cursor-pointer text-primary hover:underline">
          Learn more
        </span>
        .
      </div>
      <div className="text-xs text-gray-500">
        By clicking Sign Up, you agree to our{" "}
        <span className="cursor-pointer text-primary hover:underline">
          Terms
        </span>
        ,{" "}
        <span className="cursor-pointer text-primary hover:underline">
          Privacy Policy
        </span>{" "}
        and{" "}
        <span className="cursor-pointer text-primary hover:underline">
          Cookies Policy
        </span>
        . You may receive SMS notifications from us and can opt out at any time.
      </div>
      <div className="flex justify-center">
        <Button color="secondary" filled short wide isLoading={isLoading}>
          Sign Up
        </Button>
      </div>
    </form>
  );
}
