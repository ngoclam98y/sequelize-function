import { Product } from "../../models";

export const store = async () => {
  const product = await Product.create({
    title: "product1",
    description: "this is product1",
    userId: 1,
  });
  await product.save();
  await product.reload();
  return product;
};
