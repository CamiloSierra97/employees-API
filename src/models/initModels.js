const Areas = require("../models/areas.models");
const Employees = require("../models/employees.models");
const Subareas = require("../models/subareas.models");
const Users = require("../models/users.models");

const initModels = () => {
  //? Areas relations
  Areas.hasMany(Employees);
  Areas.hasMany(Subareas);

  //? Employees relations
  Employees.belongsTo(Areas);
  Employees.belongsTo(Subareas);
  Employees.belongsTo(Users);

  //   //? Subareas relations
    Subareas.belongsTo(Areas);
    Subareas.hasMany(Employees);

  //? Users relations
  Users.hasMany(Employees);
};

module.exports = initModels;
