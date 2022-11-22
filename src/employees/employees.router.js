//? Dependencies
const router = require("express").Router();
const employeeServices = require("./employees.services");

//? Protect routes
const passport = require("passport");
const adminValidate = require("../middlewares/role.middleware");
require("../middlewares/auth.middleware")(passport);

//? Routes

//? /api/v1/employees
router
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    employeeServices.getAllEmployees
  );

router
  .route("/:employee_id")
  .get(
    passport.authenticate("jwt", { session: false }),
    employeeServices.getEmployeeById
  )
  .patch(
    passport.authenticate("jwt", { session: false }),
    employeeServices.patchEmployee
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    employeeServices.deleteEmployee
  );

router
  .route("/my_employees")
  .get(
    passport.authenticate("jwt", { session: false }),
    employeeServices.getMyEmployees
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    employeeServices.registerEmployee
  )
  .patch(
    passport.authenticate("jwt", { session: false }),
    employeeServices.deactivateEmployee
  );

module.exports = router;
