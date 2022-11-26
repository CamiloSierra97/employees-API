//? Dependencies
const Subareas = require("../models/subareas.models");
const Areas = require("../models/areas.models");

const getSubareas = async () => {
  const data = Subareas.findAll({
    attributes: {
      exclude: ["areaId"]
    },
    include: {
      model: Areas,
    },
  });
  return data;
};

module.exports = {
  getSubareas,
};
