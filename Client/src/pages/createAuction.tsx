import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
const Register = () => {
  const [formData, setFormData] = useState({
    ItemName: "",
    ItemDescription: "",
    InitialPrice: "",
    Date: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:8000/api/create", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div className="flex justify-center p-40">
      <form onSubmit={handleSubmit}>
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle className="text-2xl">Create an Auction</CardTitle>
            <CardDescription>Welcome to the mini auctioneers..</CardDescription>
          </CardHeader>
          <CardContent>
            <label className="font-semibold leading-none tracking-tight">
              Item Name :
            </label>
            <br />
            <input
              className="border-2 rounded-lg"
              name="ItemName"
              type="text"
              placeholder="Enter a name"
              onChange={handleChange}
            />
            <br />
            <label className="font-semibold leading-none tracking-tight">
              Item Description :
            </label>
            <br />
            <textarea
              rows={7}
              cols={45}
              name="ItemDescription"
              placeholder=" Item Description."
              className="border-2 rounded-lg"
              onChange={handleChange}
            />
            <br />
            <label className="font-semibold leading-none tracking-tight">
              Initial Price :
            </label>
            <br />
            <input
              className="border-2 rounded-lg"
              type="number"
              placeholder="Initial Price"
              onChange={handleChange}
              name="InitialPrice"
            />
            <br />
            <label className="font-semibold leading-none tracking-tight">
              Date :
            </label>
            <br />
            <input
              type="datetime-local"
              className="border-2 rounded-lg"
              onChange={handleChange}
              name="Date"
            />
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button type="submit">Create a Auction</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default Register;
