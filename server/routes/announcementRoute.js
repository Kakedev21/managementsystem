const express = require("express");
const router = express.Router();
const {
  addAnnounce,
  deleteAnnounce,
  getAnnounce,
} = require("../controller/announceController");

router.post("/announcement", addAnnounce);
router.delete("/announcement/:id", deleteAnnounce);
router.get("/getannounce", getAnnounce);

module.exports = router;
