
const express = require("express");
const router = express.Router();
const { show, del, update, index, create } = require("../controllers/blogs");

router.get("/", index);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", del);
router.get("/:id", show);

module.exports = router;
