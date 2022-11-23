//? Dependencies
const router = require("express").Router();
const subareaServices = require("./subareas.services");

//? Protect routes
const passport = require("passport");

//? Routes

//? /api/v1/subareas
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  subareaServices.getSubareas
);

module.exports = router;
