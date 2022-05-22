import Express from "express";
import * as messageController from "./message.controller";

const router = Express.Router();

router.post("/message", messageController.store);
router.get("/message", messageController.index);

export default router;
