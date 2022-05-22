import { responseData } from "../utils/response";
import * as userService from "./user.service";

export const store = async (req, res) => {
  try {
    const result = await userService.store();
    return responseData({ res, status: "ok", data: result });
  } catch (error) {
    return responseData({ res, status: "error", error });
  }
};

export const index = async (req, res) => {
  try {
    const result = await userService.index();
    return responseData({ res, status: "ok", data: result });
  } catch (error) {
    return responseData({ res, status: "error", error });
  }
};
