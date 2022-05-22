import Express from "express";
import * as userController from "./user.controller";

const router = Express.Router();

router.post("/user", userController.store);
router.get("/user", userController.index);

export default router;
