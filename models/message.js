"use strict";
import { Model } from "sequelize";

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      /*Selft Join table*/
      // this.hasMany(models.Message, {
      //   foreignKey: "replyId",
      //   allowNull: true,
      //   as: "messages",
      // });

      // this.belongsTo(models.Message, {
      //   foreignKey: "replyId",
      //   as: "replyMessage",
      //   allowNull: true,
      // });

      this.belongsToMany(models.Message, {
        foreignKey: "messageId",
        allowNull: true,
        as: "messages",
        through: "MessageReply",
      });

      this.belongsToMany(models.Message, {
        foreignKey: "replyId",
        as: "replyMessage",
        allowNull: true,
        through: "MessageReply",
      });

      /*===== End ====*/

      this.belongsTo(models.User, {
        foreignKey: "userId",
        as: "users",
      });
      return this;
    }
  }
  Message.init(
    {
      content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please input content message !",
          },
        },
      },
    },
    {
      sequelize,
      tableName: "messages",
    }
  );
  return Message;
};
