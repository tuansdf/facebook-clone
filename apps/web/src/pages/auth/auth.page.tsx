import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "preact/hooks";
import AuthFooter from "/src/features/auth/auth-footer";
import LoginForm from "/src/features/auth/login-form";
import RegisterForm from "/src/features/auth/register-form";
import Button from "/src/features/ui/button";
import Card from "/src/features/ui/card";
import Divider from "/src/features/ui/divider";
import Modal from "/src/features/ui/modal";

export default function AuthPage() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
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
                <Card
                  bordered
                  width="25rem"
                  className="flex flex-col items-center gap-4"
                >
                  <LoginForm />
                  <Divider />
                  <Button
                    filled
                    color="secondary"
                    onClick={openModal}
                    type="button"
                  >
                    Create New Account
                  </Button>
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
        <AuthFooter />
      </div>

      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold">Sign Up</h3>
              <div className="text-gray-500">It&apos;s quick and easy</div>
            </div>
            <button onClick={closeModal}>
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <Divider />
          <RegisterForm />
        </div>
      </Modal>
    </>
  );
}
