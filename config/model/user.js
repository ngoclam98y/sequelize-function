import bcrypt from "bcryptjs";
import { Model } from "sequelize";

const hashPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

class User extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        userName: {
          type: DataTypes.STRING,
        },
        passWord: {
          type: DataTypes.STRING,
        },
      },
      {
        hooks: {
          beforeCreate: (user) => {
            const passwordHash = hashPassword(user.password);
            user.password = passwordHash;
          },
        },
        sequelize,
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Product);
    this.hasMany(models.Message);
    this.belongsToMany(models.Order);
  }
}

export default User;
