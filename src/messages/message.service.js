import * as messageRepository from "./message.repository";

export const store = (replyId) => {
  return messageRepository.store(replyId);
};

export const index = () => {
  return messageRepository.index();
};
