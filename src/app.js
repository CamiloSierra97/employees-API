//? Dependencies
const express = require("express");
const cors = require("cors");
const db = require("./utils/database");

//? Files
const config = require("./config");
const initModels = require("./models/initModels");

//? Routes
const usersRouter = require("./users/users.router");
const authRouter = require("./auth/auth.router");
const employeesRouter = require("./employees/employees.router");
const areasRouter = require("./areas/areas.router");
const subareasRouter = require("./subareas/subareas.router");

//? Initial Configs
const app = express();

//? Seeders functions
// const createUsers = require("./utils/seeders/users");
// const createAreas = require("./utils/seeders/areas");
// const createSubareas = require("./utils/seeders/subareas");
// const createEmployees = require("./utils/seeders/employees");

//? Enable Cors
// const whitelist = [
//   "http://127.0.0.1:9000",
//   "http://127.0.0.1:5173",
//   "https://employees-service-4g33.onrender.com",
//   "https://employees-camilo.netlify.app/",
// ];

app.use(express.json());
app.use(cors());

db.authenticate()
  .then(() => {
    console.log("Database autenticated");
  })
  .catch((err) => {
    console.log(err);
  });

db.sync()
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.log(err);
  });

initModels();

//? Petitions

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server OK!",
    users: `localhost:${config.port}/api/v1/users`,
  });
});

//? Verbs
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/employees", employeesRouter);
app.use("/api/v1/areas", areasRouter);
app.use("/api/v1/subareas", subareasRouter);

app.listen(config.port, () => {
  console.log(`Server started at port ${config.port}`);
});

//? Seeders execution
// createUsers(db);
// createAreas(db);
// createSubareas(db);
// createEmployees.createFinancesEmployees(db);
// createEmployees.createHREmployees(db);
// createEmployees.createMarketingEmployees(db);
// createEmployees.createOperationsEmployees(db);
// createEmployees.createTechnologyEmployees(db);
