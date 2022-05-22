import { Order, Product, User } from "../../models";

export const store = async () => {
  await User.create({
    userName: "ngoclamsn98",
    password: "Ngoclam@1998",
  });

  const order = await Order.findOne({
    include: [{ model: User, as: "users" }],
    // raw: true,
    // nest: true,
  });

  if (!order) {
    const newOrder = await Order.create({
      userId: 1,
    });

    const product = await Product.create({
      title: "product1",
      description: "this is product1",
      userId: 1,
    });

    // newOrder.addProduct(product, { through: { quantity: 1 } });
    newOrder.addProduct(1, { through: { quantity: 1 } });

    await newOrder.save();
    await newOrder.reload();

    const result = await Order.findOne({
      include: [{ model: Product, as: "products" }],
    });

    return result;
  }
};

export const index = async () => {
  const users = await User.findOne({
    include: [
      {
        model: Order,
        as: "orders",
        attributes: { exclude: ["userId"] },
        include: [
          {
            model: Product,
            as: "products",
          },
        ],
      },
    ],
    attributes: { exclude: ["password"] },
    raw: true,
    nest: true,
  });
  return users;
};
