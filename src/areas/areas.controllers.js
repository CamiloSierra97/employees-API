//? Dependencies
const Areas = require("../models/areas.models");

const getAllAreas = async () => {
  const data = await Areas.findAll();
  return data;
};

module.exports = {
  getAllAreas,
};
