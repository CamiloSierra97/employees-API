//? Dependencies
const uuid = require("uuid");
const Areas = require("../models/areas.models");
const Employees = require("../models/employees.models");
const Subareas = require("../models/subareas.models");
const Users = require("../models/users.models");

const getAllEmployees = async () => {
  const data = await Employees.findAll({
    attributes: {
      exclude: ["userId", "areaId", "subareaId"],
    },
    include: [
      {
        model: Users,
        attributes: {
          exclude: ["email", "password"],
        },
      },
      {
        model: Areas,
      },
      {
        model: Subareas,
        attributes: {
          exclude: ["areaId"],
        },
      },
    ],
  });
  return data;
};

const getAllEmployeesPagination = async (offset, limit) => {
  const data = await Employees.findAndCountAll({
    offset,
    limit,
    attributes: {
      exclude: ["userId", "areaId", "subareaId"],
    },
    include: [
      {
        model: Users,
        attributes: {
          exclude: ["email", "password"],
        },
      },
      {
        model: Areas,
      },
      {
        model: Subareas,
        attributes: {
          exclude: ["areaId"],
        },
      },
    ],
  });
  return data;
};

const getEmployeeById = async (id) => {
  const data = await Employees.findOne({
    where: {
      id,
    },
  });
  return data;
};

const getEmployeeByBoss = async (userId, offset, limit) => {
  const data = await Employees.findAndCountAll({
    offset,
    limit,
    where: {
      userId,
    },
    attributes: {
      exclude: ["userId", "areaId", "subareaId"],
    },
    include: [
      {
        model: Users,
        attributes: {
          exclude: ["email", "password"],
        },
      },
      {
        model: Areas,
      },
      {
        model: Subareas,
        attributes: {
          exclude: ["areaId"],
        },
      },
    ],
  });
  return data;
};

const createEmployee = async (data) => {
  const newEmployee = await Employees.create({
    id: uuid.v4(),
    firstName: data.firstName,
    lastName: data.lastName,
    phone: data.phone,
    birthday: data.birthday,
    identificationCardType: data.identificationCardType,
    identificationCardNumber: data.identificationCardNumber,
    gender: data.gender,
    country: data.country,
    address: data.address,
    userId: data.userId,
    areaId: data.areaId,
    subareaId: data.subareaId,
  });
  return newEmployee;
};

const updateEmployee = async (id, data) => {
  const response = await Employees.update(data, {
    where: {
      id,
    },
  });
  return response;
};

const deleteEmployee = async (id) => {
  const data = await Employees.destroy({
    where: {
      id,
    },
  });
  return data;
};

module.exports = {
  getAllEmployees,
  getAllEmployeesPagination,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeeByBoss,
};
