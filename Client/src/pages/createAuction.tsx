import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { setDate } from "date-fns";
import { useState } from "react";

const Register = () => {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [price, setprice] = useState("");
  const [date, setdate] = useState(() => new Date());

  return (
    <div className="flex justify-center p-40">
      <form>
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle className="text-2xl">Create an Auction</CardTitle>
            <CardDescription>Welcome to the mini auctioneers..</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={(e) => e.preventDefault()}>
              <label>Item Name :</label>
              <br />
              <input
                className="border"
                type="text"
                placeholder="Enter a name"
                onChange={(e) => setItemName(e.target.value)}
              />
              <br />
              <label>Item Description :</label>
              <br />
              <textarea
                rows={7}
                cols={45}
                placeholder=" Item Description."
                className="border "
                onChange={(e) => setItemDescription(e.target.value)}
              />
              <br />
              <label>Initial Price :</label>
              <br />
              <input
                className="border"
                type="number"
                placeholder="Initial Price"
                onChange={(e) => setprice(e.target.value)}
              />
              <br />
              <label>Date :</label>
              <br />
              <input
                type="date"
                className="border"
                onChange={(e: any) => setdate(e.target.value)}
              />
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button>Create a Auction</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default Register;
