"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Matriculation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Matriculation.belongsTo(models.User, { foreignKey: "student_id" });
      Matriculation.belongsTo(models.Class, { foreignKey: "class_id" });
    }
  }
  Matriculation.init(
    {
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Matriculation",
    }
  );
  return Matriculation;
};
