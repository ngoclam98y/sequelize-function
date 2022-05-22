import { responseData } from "../utils/response";
import * as messageService from "./message.service";

export const store = async (req, res) => {
  try {
    const result = await messageService.store({ replyId: null });
    return responseData({ res, status: "ok", data: result });
  } catch (error) {
    return responseData({ res, status: "error", error });
  }
};

export const index = async (req, res) => {
  try {
    const result = await messageService.index();
    return responseData({ res, status: "ok", data: result });
  } catch (error) {
    console.log(error, "error");
    return responseData({ res, status: "error", error });
  }
};
