const areaControllers = require("./areas.controllers");

const getAllAreas = (req, res) => {
  areaControllers
    .getAllAreas()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};


module.exports = {
  getAllAreas,
};
