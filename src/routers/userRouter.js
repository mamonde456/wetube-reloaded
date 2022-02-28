import express from "express";
import { edit, remove, logOut, see } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logOut);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get(":id", see);

export default userRouter;
