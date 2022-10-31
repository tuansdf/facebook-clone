import { useForm } from "react-hook-form";
import Button from "/src/features/ui/button";
import Card from "/src/features/ui/card";
import Divider from "/src/features/ui/divider";
import Link from "/src/features/ui/link";
import TextField from "/src/features/ui/text-field";

export function App() {
  const { register, handleSubmit } = useForm();
  return (
    <div className="p-4">
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
            Create new account
          </Button>
        </div>
      </Card>
    </div>
  );
}
