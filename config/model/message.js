import Sequelize, { Model } from "sequelize";

export default class Message extends Model {
  static init(sequelize) {
    return super.init(
      {
        content: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Message, {
      foreignKey: "message_id",
      allowNull: true,
      as: "ParentMessage",
    });
    this.belongsTo(models.User, { foreignKey: "message_id" });
  }
}

// return models.Entry.findById(id, {
//     include: [{
//         model: models.Entry,
//         as: 'ParentMessage'
//     }]
// }) -> query SelfJoin

// Parent.hasMany(Child, { foreignKey: 'parent_id' }); // note the 'foreign_key' parameter
// Child.belongsTo(Parent, { foreignKey: 'parent_id' }); // and here as well
