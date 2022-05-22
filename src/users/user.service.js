import * as userRepository from "./user.repository";

export const store = () => {
  return userRepository.store();
};

export const index = () => {
  return userRepository.index();
};
