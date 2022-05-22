import { Product, User } from "../../models";

export const store = async () => {
  const user = await User.create({
    userName: "ngoclamsn98",
    password: "Ngoclam@1998",
  });
  await user.save();
  await user.reload();
  return user;
};

export const index = async () => {
  const users = await User.findOne({
    include: [
      {
        model: Product,
        as: "products",
        attributes: { exclude: ["userId"] },
      },
    ],
    attributes: { exclude: ["password"] },
    raw: true,
    nest: true,
  });
  return users;
};
