//? Dependencies
const router = require("express").Router();
const areaServices = require("./areas.services");

//? Protect routes
const passport = require("passport");

//? Routes

//? /api/v1/areas
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  areaServices.getAllAreas
);

module.exports = router;
