import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ILoginUserDto } from "shared-types";
import useAuthStore from "/src/features/auth/auth.store";
import Button from "/src/features/ui/button";
import Card from "/src/features/ui/card";
import Divider from "/src/features/ui/divider";
import Link from "/src/features/ui/link";
import TextField from "/src/features/ui/text-field";

export default function AuthPage() {
  const { register, handleSubmit } = useForm<ILoginUserDto>();

  const login = useAuthStore((state) => state.login);
  const isLoading = useAuthStore((state) => state.isLoading);
  const error = useAuthStore((state) => state.error);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ILoginUserDto> = (data) => {
    login(data, { onSuccess: () => navigate("/") });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col bg-background">
        <div className="mx-auto flex max-w-screen-tablet flex-1 items-center justify-center">
          {/* main */}
          <div className="flex items-center justify-between gap-8">
            {/* left */}
            <div className="mb-16 space-y-4">
              <h1 className="text-6xl font-bold tracking-tighter text-primary">
                facebook
              </h1>
              <p className="text-2xl">
                Facebook helps you connect and share with the people in your
                life.
              </p>
            </div>

            {/* right */}
            <div className="flex-none">
              <Card bordered width="25rem">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="space-y-3">
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
                      <div className="text-sm text-red-500">
                        {error.message}
                      </div>
                    ) : null}
                  </div>
                  <Link href="https://www.google.com">Forgotten password?</Link>
                  <Divider />
                  <Button filled color="secondary">
                    Create New Account
                  </Button>
                </form>
              </Card>

              <p className="mt-6 text-center text-sm">
                <span className="cursor-pointer font-bold hover:underline">
                  Create a Page
                </span>{" "}
                for a celebrity, brand or business
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="mx-auto w-full max-w-screen-tablet space-y-3 py-8 text-xs text-gray-500">
        {/* languages */}
        <div className="flex gap-x-3">
          <span>English</span>
          <span>Tieng Viet</span>
          <span>Espanol</span>
          <span>Portugues</span>
          <span>Deustsch</span>
          <span>Italiano</span>
        </div>

        <Divider />

        {/* services */}
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <span>Sign Up</span>
          <span>Log In</span>
          <span>Messenger</span>
          <span>Facebook Lite</span>
          <span>Watch</span>
          <span>Places</span>
          <span>Games</span>
          <span>Marketplace</span>
          <span>Meta Play</span>
          <span>Oculus</span>
          <span>Portal</span>
          <span>Instagram</span>
          <span>Bulletin</span>
          <span>Local</span>
          <span>Fundraisers</span>
          <span>Services</span>
          <span>Voting Information Centre</span>
          <span>Groups</span>
          <span>About</span>
          <span>Create ad</span>
          <span>Create Page</span>
          <span>Developers</span>
          <span>Careers</span>
          <span>Privacy</span>
          <span>Cookies</span>
          <span>AdChoices</span>
          <span>Terms</span>
          <span>Help</span>
          <span>Contact uploading and non-users</span>
        </div>

        <div></div>
      </div>
    </div>
  );
}
