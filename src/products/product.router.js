import Express from "express";
import * as productController from "./product.controller";

const router = Express.Router();

router.post("/product", productController.store);

export default router;
