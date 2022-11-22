//? Dependencies
const uuid = require("uuid");
const Employees = require("../models/employees.models");

const getAllEmployees = async () => {
  const data = await Employees.findAndCountAll();
  return data;
};

const getEmployeeById = async (employee_id) => {
  const data = await Employees.findOne({
    where: {
      id: employee_id,
    },
  });
  return data;
};

const getEmployeeByBoss = async (user_id) => {
  const data = await Employees.findAndCountAll({
    where: {
      userId: user_id,
    },
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
  });
  return newEmployee;
};

const updateEmployee = async (employee_id, data) => {
  const response = await Employees.update(data, {
    where: {
      id: employee_id,
    },
  });
  return response;
};

const deleteEmployee = async (employee_id) => {
  const data = await Employees.destroy({
    where: {
      id: employee_id,
    },
  });
  return data;
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeeByBoss,
};
