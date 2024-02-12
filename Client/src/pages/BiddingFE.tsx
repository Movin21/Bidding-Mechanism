import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useBid } from "../hooks/useBid";

const BiddingComponenet = () => {
  const {
    startingPrice,
    currentHighestBid,
    countDown,
    biddingMechanism,
    setEnteredValue,
  } = useBid(20, new Date("2024-02-07T10:52:00"));
  return (
    <div className="p-20">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Art 1</CardTitle>
          <CardDescription className="text-l font-medium">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="font-semibold">
            Starting Price: $
            <span className="font-medium">{startingPrice}</span>
          </p>
        </CardContent>
        <CardContent className="flex justify-start">
          <ToggleGroup type="multiple" variant="outline">
            <ToggleGroupItem value="bold">
              {Math.floor(countDown / 3600000)} h
            </ToggleGroupItem>
            <ToggleGroupItem value="italic">
              {Math.floor((countDown % 3600000) / 60000)} m
            </ToggleGroupItem>
            <ToggleGroupItem value="strikethrough">
              {Math.floor((countDown % 60000) / 1000)} s
            </ToggleGroupItem>
          </ToggleGroup>
        </CardContent>
        <CardContent>
          <p className="font-semibold">
            Current Bid: ${" "}
            <span className="font-bold text-red-600">{currentHighestBid}</span>
          </p>
        </CardContent>
        {!countDown ? (
          <CardFooter>
            <Alert variant="destructive">
              <ExclamationTriangleIcon className="h-4 w-4" />
              <AlertTitle>Auction Ended!!</AlertTitle>
              <AlertDescription>
                Auction has ended. Thank you for participating.
              </AlertDescription>
            </Alert>
          </CardFooter>
        ) : (
          <CardFooter>
            <div className="flex w-25 max-w-sm items-center space-x-2">
              <Input
                type="Number"
                placeholder="Enter Your Bid Value"
                onChange={(e: any) => {
                  setEnteredValue(e.target.value);
                }}
              />
              <Button
                type="submit"
                onClick={(event: any) => {
                  biddingMechanism(event);
                }}
              >
                Place the Bid
              </Button>
            </div>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default BiddingComponenet;
