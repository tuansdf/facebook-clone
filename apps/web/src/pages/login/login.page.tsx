import { useForm } from "react-hook-form";
import Button from "/src/features/ui/button";
import Card from "/src/features/ui/card";
import Divider from "/src/features/ui/divider";
import Link from "/src/features/ui/link";
import TextField from "/src/features/ui/text-field";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();

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
                <div className="flex flex-col items-center gap-4">
                  <div className="space-y-3">
                    <TextField
                      placeholder="Email"
                      register={register}
                      field="email"
                      bordered
                      fullWidth
                    />
                    <TextField
                      placeholder="Password"
                      register={register}
                      field="password"
                      bordered
                      type="password"
                      fullWidth
                    />
                  </div>
                  <Button filled fullWidth>
                    Log in
                  </Button>
                  <Link href="https://www.google.com">Forgetten password?</Link>
                  <Divider />
                  <Button filled color="secondary">
                    Create New Account
                  </Button>
                </div>
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
