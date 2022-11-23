const employeeControllers = require("./employees.controllers");

const getAllEmployees = (req, res) => {
  const { offset, limit } = req.query;
  employeeControllers
    .getAllEmployees(offset, limit)
    .then((data) => {
      res.status(200).json({
        offset,
        limit,
        results: data,
      });
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getEmployeeById = (req, res) => {
  const employee_id = req.params.employee_id;
  employeeControllers
    .getEmployeeById(employee_id)
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

const patchEmployee = (req, res) => {
  const employee_id = req.params.employee_id;
  const { phone, gender, country, address } = req.body;
  employeeControllers
    .updateEmployee(employee_id, { phone, gender, country, address })
    .then((data) => {
      if (data[0]) {
        res
          .status(200)
          .json({ message: `User with ID ${id}, edited succesfully` });
      } else {
        res.status(404).json({ message: "Invalid ID or missing data" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const registerEmployee = (req, res) => {
  const {
    firstName,
    lastName,
    phone,
    birthday,
    identificationCardType,
    identificationCardNumber,
    gender,
    userId,
    country,
    address,
    status,
    areaId,
    subareaId,
  } = req.body;
  if (
    firstName &&
    lastName &&
    phone &&
    birthday &&
    identificationCardType &&
    identificationCardNumber &&
    userId &&
    country &&
    areaId &&
    subareaId
  ) {
    employeeControllers
      .createEmployee({
        firstName,
        lastName,
        phone,
        birthday,
        identificationCardType,
        identificationCardNumber,
        gender,
        userId,
        country,
        address,
        status,
        areaId,
        subareaId,
      })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } else {
    //? Error when data is missing
    res.status(400).json({
      message: "All fields must be completed",
      fields: {
        firstName: "string",
        lastName: "string",
        phone: "+573001234567",
        birthday: "YYYY/MM/DD",
        identificationCardType: "string",
        identificationCardNumber: "string",
        userId: "uuid",
        country: "string",
        areaId: "uuid",
        subareaId: "uuid",
      },
    });
  }
};

const deleteEmployee = (req, res) => {
  const employee_id = req.params.employee_id;
  employeeControllers
    .deleteEmployee(employee_id)
    .then((data) => {
      if (data !== 0) {
        res.status(204).json();
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

//? My employees services
const getMyEmployees = (req, res) => {
  const user_id = req.user.id;
  employeeControllers
    .getEmployeeByBoss(user_id)
    .then((data) => {
      res.status(200).json({
        offset,
        limit,
        results: data,
      });
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const deactivateEmployee = (req, res) => {
  const employee_id = req.params.employee_id;
  employeeControllers
    .updateEmployee(employee_id, { status: "inactive" })
    .then((data) => {
      res.status(200).json("Your user was deleted succesfully");
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  patchEmployee,
  registerEmployee,
  deleteEmployee,
  getMyEmployees,
  deactivateEmployee,
};
