"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Class, {
        foreignKey: "teacher_id",
      });

      User.hasMany(models.Matriculation, {
        foreignKey: "student_id",
        scope: { status: "confirmado" },
        as: "classesEnrollment",
      });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          functionValidate: function (data) {
            if (data.length <= 3) {
              throw new Error("name must be longer than 3 characters");
            }
          },
        },
      },
      active: DataTypes.BOOLEAN,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: "Invalid email",
          },
        },
      },
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      paranoid: true,
      defaultScope: {
        where: {
          active: true,
        },
      },
      scopes: {
        all: {
          where: {},
        },
      },
    }
  );
  return User;
};
