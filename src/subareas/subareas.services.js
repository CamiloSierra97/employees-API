const subareasControllers = require("./subareas.controllers");

const getSubareasByArea = (req, res) => {
  const areaId = req.body;
  subareasControllers
    .getSubareasByArea(areaId)
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
  getSubareasByArea,
};
