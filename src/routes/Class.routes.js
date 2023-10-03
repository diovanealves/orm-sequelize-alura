const { Router } = require("express");
const ClassController = require("../controllers/ClassController");

const router = Router();
const classController = new ClassController();

router.get("/class", classController.getAll.bind(classController));
router.get("/class/:id", classController.getById.bind(classController));
router.post("/class", classController.create.bind(classController));
router.put("/class/:id", classController.update.bind(classController));
router.delete("/class/:id", classController.delete.bind(classController));

module.exports = router;
