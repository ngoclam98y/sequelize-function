import { Model } from "sequelize";

class Product extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        title: {
          type: DataTypes.STRING,
        },
        description: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.User);
    this.belongsToMany(models.Order);
  }
}

export default Product;
