"use strict";
import { Model } from "sequelize";

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        as: "users",
        foreignKey: "userId",
      });
      this.belongsToMany(models.Product, {
        through: models.OrderProduct,
        as: "products",
        foreignKey: "orderId",
      });
      return this;
    }
  }
  Order.init(
    {},
    {
      sequelize,
      tableName: "orders",
    }
  );
  return Order;
};
