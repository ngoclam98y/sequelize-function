import { Model } from "sequelize";

class Order extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        quantity: {
          type: DataTypes.INTEGER,
        },
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsToMany(models.User);
    this.belongsToMany(models.Product);
  }
}

export default Order;
