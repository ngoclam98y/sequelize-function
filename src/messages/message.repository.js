import { Message, User } from "../../models";

export const store = async ({ replyId }) => {
  await User.create({
    userName: "ngoclamsn98",
    password: "Ngoclam@1998",
  });

  const message = await Message.create({
    content: "Hello this is first message",
    userId: 1,
  });

  const newMessage = await Message.create({
    content: "reply message1",
    userId: 1,
  });

  const newMessage2 = await Message.create({
    content: "reply message1",
    userId: 1,
  });

  await message.addMessage(newMessage);
  await newMessage.addMessage(newMessage2);
  await message.save();

  try {
    const users = await User.findOne({
      include: [
        {
          model: Message,
          as: "messages",
          attributes: { exclude: ["userId"] },
          include: [
            {
              model: Message,
              as: "messages",
              attributes: { exclude: ["userId"] },
            },
          ],
        },
      ],
      attributes: { exclude: ["password"] },
    });
    return users;
  } catch (error) {
    console.log(error, "what is");
  }
};

export const index = async () => {
  const users = await User.findOne({
    include: [
      {
        model: Message,
        as: "messages",
        attributes: { exclude: ["userId"] },
        include: [{ model: Message, as: "ParentMessage" }],
      },
    ],
    attributes: { exclude: ["password"] },
    raw: true,
    nest: true,
  });
  return users;
};
