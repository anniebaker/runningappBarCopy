const express = require("express");
const router = express.Router();
const { list, create } = require("../controllers/loginController");

router.get("/", list);

// router.get("/", login);
// router.get("/comments/:id", show);
router.post("/", create);
// router.put("/comments/:id", update);
// router.delete("/comments/:id", remove);

module.exports = router;
