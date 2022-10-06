const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        state: {
          type: DataTypes.INTEGER,
        },
        password_hash: {
          type: DataTypes.STRING,
        },
        token: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        tableName: "users",
      }
    );
  }
}

module.exports = User;
