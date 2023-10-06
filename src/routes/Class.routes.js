const { Router } = require("express");
const ClassController = require("../controllers/ClassController");

const router = Router();
const classController = new ClassController();

router.get("/class", classController.GetAll.bind(classController));
router.get("/class/:id", classController.GetById.bind(classController));
router.post("/class", classController.Create.bind(classController));
router.post(
  "/class/:id/restore",
  classController.Restore.bind(classController)
);
router.put("/class/:id", classController.Update.bind(classController));
router.delete("/class/:id", classController.Delete.bind(classController));

module.exports = router;
