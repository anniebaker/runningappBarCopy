const express = require("express");
const router = express.Router();
const { list, create, update } = require("../controllers/userController");

router.get("/", list);
// router.get("/", login);
// router.get("/comments/:id", show);
router.post("/", create);
// router.put("/comments/:id", update);
// router.delete("/comments/:id", remove);
router.put('/', update)

module.exports = router;
