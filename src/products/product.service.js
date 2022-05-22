import * as productRepository from "./product.repository";

export const store = () => {
  return productRepository.store();
};
