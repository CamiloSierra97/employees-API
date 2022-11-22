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

//? Initial Configs
const app = express();

//? Seeders functions
// const createUsers = require("./utils/seeders/users");
// const createAreas = require("./utils/seeders/areas");
// const createSubareas = require("./utils/seeders/subareas");
// const createEmployees = require("./utils/seeders/employees");

//? Enable Cors
const whitelist = [
  "http://127.0.0.1:9000",
  "http://127.0.0.1:5173",
  "https://employees-service-xh3x.onrender.com",
  "https://employees-camilo.netlify.app/",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) != -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by cors"));
    }
  },
};

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

app.get("/", cors(corsOptions), (req, res) => {
  res.status(200).json({
    message: "Server OK!",
    users: `localhost:${config.port}/api/v1/users`,
  });
});

//? Verbs
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/employees", employeesRouter);

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
