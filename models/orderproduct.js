"use strict";
import { Model } from "sequelize";

module.exports = (sequelize, DataTypes) => {
  class OrderProduct extends Model {
    static associate() {}
  }
  OrderProduct.init(
    {
      productId: DataTypes.INTEGER,
      orderId: DataTypes.INTEGER,
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "OrderProduct",
    }
  );
  return OrderProduct;
};
