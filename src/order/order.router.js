import Express from "express";
import * as orderController from "./order.controller";

const router = Express.Router();

router.post("/order", orderController.store);
router.get("/order", orderController.index);

export default router;
