import * as React from "react";

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

const Register = () => {
  return (
    <div className="flex justify-center p-40">
      <Card className="w-[850px]">
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>Create a new Account as a Bidder.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">username</Label>
                <Input id="username" placeholder="Enter username" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="Enter password" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Re-enter Password</Label>
                <Input id="password" placeholder="Enter password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Create</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
