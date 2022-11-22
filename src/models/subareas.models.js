const db = require("../utils/database");
const Areas = require("../models/areas.models");

const { DataTypes } = require("sequelize");

const Subareas = db.define(
  "subareas",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    areaId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "area_id",
      references: {
        key: "id",
        model: Areas,
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Subareas;
