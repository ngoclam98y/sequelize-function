import { responseData } from "../utils/response";
import * as productService from "./product.service";

export const store = async (req, res) => {
  try {
    const result = await productService.store();
    return responseData({ res, status: "ok", data: result });
  } catch (error) {
    return responseData({ res, status: "error", error });
  }
};
