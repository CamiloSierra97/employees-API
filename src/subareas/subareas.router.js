//? Dependencies
const router = require("express").Router();
const subareaServices = require("./subareas.services");

//? Protect routes
const passport = require("passport");

//? Routes

//? /api/v1/users
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  subareaServices.getSubareasByArea
);

module.exports = router;
