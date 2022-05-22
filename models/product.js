"use strict";
import { Model } from "sequelize";

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "userId",
        as: "users",
      });
      this.belongsToMany(models.Order, {
        through: models.OrderProduct,
        as: "orders",
        foreignKey: "productId",
      });
      return this;
    }
  }
  Product.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: {
            args: 5,
            msg: "title is min length 5 ",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: {
            args: 5,
            msg: "description is min length 5 ",
          },
        },
      },
    },
    {
      sequelize,
      tableName: "products",
    }
  );
  return Product;
};
