import { responseData } from "../utils/response";
import * as orderService from "./order.service";

export const store = async (req, res) => {
  try {
    const result = await orderService.store();
    return responseData({ res, status: "ok", data: result });
  } catch (error) {
    console.log(error, "error=========");
    return responseData({ res, status: "error", error });
  }
};

export const index = async (req, res) => {
  try {
    const result = await orderService.index();
    return responseData({ res, status: "ok", data: result });
  } catch (error) {
    return responseData({ res, status: "error", error });
  }
};
