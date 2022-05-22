"use strict";

import bcrypt from "bcryptjs";
import { Model } from "sequelize";

const hashPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Message, {
        foreignKey: "userId",
        as: "messages",
      });
      this.hasMany(models.Product, {
        foreignKey: "userId",
        as: "products",
      });
      this.hasOne(models.Order, {
        as: "orders",
        foreignKey: "userId",
      });
      return this;
    }
  }
  User.init(
    {
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: {
            args: 5,
            msg: "password is min length 5 ",
          },
        },
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          min: {
            args: 5,
            msg: "userName is min length 5 ",
          },
        },
      },
    },
    {
      sequelize,
      tableName: "users",
      hooks: {
        beforeCreate: (user) => {
          const passwordHash = hashPassword(user.password);
          user.password = passwordHash;
        },
      },
    }
  );
  return User;
};
