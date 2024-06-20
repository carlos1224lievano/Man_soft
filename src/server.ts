import express from "express";
import { Signale } from "signale";

//import { userRouter } from "./event/LoadRouter";
import { userRouter } from "./product/infrastructure/UserRouter";

const app = express();

const signale = new Signale();

app.use(express.json());
//app.use("/user", productRouter);
app.use("/users", userRouter);

app.listen(3000, () => {
  signale.success("Server online in port 3000");
});
