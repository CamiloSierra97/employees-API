const db = require("../utils/database");
const Users = require("../models/users.models");
const Areas = require("../models/areas.models");
const Subareas = require("../models/subareas.models");

const { DataTypes } = require("sequelize");

const Employees = db.define("employees", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "first_name",
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "last_name",
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  birthday: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  identificationCardType: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "identification_card_type",
  },
  identificationCardNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "identification_card_number",
  },
  gender: {
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "user_id",
    references: {
      key: "id",
      model: Users,
    },
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.TEXT,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "active",
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
  subareaId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "subarea_id",
    references: {
      key: "id",
      model: Subareas,
    },
  },
});

module.exports = Employees;
