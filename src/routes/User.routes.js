const { Router } = require("express");
const UserController = require("../controllers/UserController.js");

const router = Router();
const userController = new UserController();

router.get("/user", userController.GetAll.bind(userController));
router.get("/user/:id", userController.GetById.bind(userController));
router.post("/user", userController.Create.bind(userController));
router.post("/user/:id/restore", userController.Restore.bind(userController));
router.put("/user/:id", userController.Update.bind(userController));
router.delete("/user/:id", userController.Delete.bind(userController));

module.exports = router;
