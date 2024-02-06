import * as React from "react";
import { Textarea } from "@/components/ui/textarea";

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
      <Card className="w-[1050px]">
        <CardHeader>
          <CardTitle className="text-2xl">Create an Auction</CardTitle>
          <CardDescription>Welcome to the mini auctioneers..</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Item Name</Label>
                <Input id="itemName" placeholder="Enter a name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Item Description</Label>
                <Textarea rows={7} placeholder="Type your Item Description." />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="Starting Price">Initial Price</Label>
                <Input
                  id="Starting Price"
                  placeholder="Enter a Initial Price"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="Duration">Time Duration</Label>
                <Input
                  id="Duration"
                  type="Number"
                  placeholder="Enter Time Duration"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Create a Auction</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
