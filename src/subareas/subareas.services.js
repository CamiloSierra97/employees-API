const subareasControllers = require("./subareas.controllers");

const getSubareas = (req, res) => {
  const areaName = req.body;
  subareasControllers
    .getSubareasByAreaName(areaName)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  getSubareas,
};
