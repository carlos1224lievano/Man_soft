import express from "express";

import { createUserController } from "./dependencies";
import { getAllUserController } from "./dependencies";
import { getByIdUserController } from "./dependencies";
import { deleteByIdUserController } from "./dependencies";

export const userRouter = express.Router();

userRouter.get("/", getAllUserController.run.bind(getAllUserController));
userRouter.get("/:id", getByIdUserController.run.bind(getByIdUserController));
userRouter.delete(
  "/:id",
  deleteByIdUserController.run.bind(deleteByIdUserController)
);
userRouter.post("/", createUserController.run.bind(createUserController));
