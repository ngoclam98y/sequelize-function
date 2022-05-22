import * as orderRepository from "./order.repository";

export const store = () => {
  return orderRepository.store();
};

export const index = () => {
  return orderRepository.index();
};
