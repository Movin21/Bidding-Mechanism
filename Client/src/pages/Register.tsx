import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Schema, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  username: z.string(),
  password: z.string().min(8),
});

type FormFeilds = z.infer<typeof schema>;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFeilds>({ resolver: zodResolver(schema) });

  const fetchData = async (data: FormFeilds) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      //setError("This one is taken")
    }
  };
  return (
    <div className="flex justify-center my-80">
      <form onSubmit={handleSubmit(fetchData)}>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="">Register</CardTitle>
            <CardDescription>Welcom to mini-auctions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="Username">Username</Label>
                <Input
                  placeholder="Username"
                  {...register("username", {
                    required: "username is required",
                    maxLength: 8,
                  })}
                />
                {errors.username && (
                  <p className="text-red-500">{errors.username.message}</p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Passsword</Label>
                <Input
                  placeholder="password"
                  {...register("password", { required: true, minLength: 6 })}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="conformPassword">Conform Password</Label>
                <Input
                  placeholder="conform Password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button disabled={isSubmitting} type="submit">
              {isSubmitting ? "Creating an Account..." : "Create"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default Register;
