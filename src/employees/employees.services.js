const employeeControllers = require("./employees.controllers");
const { host } = require("../config");

const getAllEmployees = (req, res) => {
  const offset = Number(req.query.offset) || 0;
  const limit = Number(req.query.limit) || 10;
  const urlBase = `${host}/api/v1/employees`;
  employeeControllers
    .getAllEmployees(offset, limit)
    .then((data) => {
      const nextPage =
        data.count - offset >= limit
          ? `${urlBase}?offset=${offset + limit}&limit=${limit}`
          : null;
      const prevPage =
        offset - limit >= 0
          ? `${urlBase}?offset=${offset - limit}&limit=${limit}`
          : null;
      res.status(200).json({
        next: nextPage,
        previous: prevPage,
        amount: data.count,
        offset,
        limit,
        results: data.rows,
      });
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getEmployeeById = (req, res) => {
  const employee_id = req.params.id;
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
  const employee_id = req.params.id;
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
  const userId = req.user.id;
  const {
    firstName,
    lastName,
    phone,
    birthday,
    identificationCardType,
    identificationCardNumber,
    gender,
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
  const employee_id = req.params.id;
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
  const userId = req.user.id;
  const offset = Number(req.query.offset) || 0;
  const limit = Number(req.query.limit) || 10;
  const urlBase = `${host}/api/v1/employees`;
  employeeControllers
    .getEmployeeByBoss(userId, offset, limit)
    .then((data) => {
      const nextPage =
        data.count - offset >= limit
          ? `${urlBase}?offset=${offset + limit}&limit=${limit}`
          : null;
      const prevPage =
        offset - limit >= 0
          ? `${urlBase}?offset=${offset - limit}&limit=${limit}`
          : null;
      res.status(200).json({
        next: nextPage,
        previous: prevPage,
        amount: data.count,
        offset,
        limit,
        results: data.rows,
      });
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const deactivateEmployee = (req, res) => {
  const employee_id = req.params.id;
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
