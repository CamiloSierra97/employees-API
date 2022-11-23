//? Dependencies
const Subareas = require("../models/subareas.models");

const getSubareasByArea = async (areaId) => {
  const data = Subareas.findAll({
    where: {
      areaId,
    },
  });
  return data;
};

module.exports = {
  getSubareasByArea,
};
