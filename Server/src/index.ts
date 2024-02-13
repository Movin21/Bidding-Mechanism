import express from "express";

const app = express();

app.listen(3000, (): void => {
  console.log("Server started on port 3000");
});
