const { Router } = require("express");
const LevelController = require("../controllers/LevelController");

const router = Router();
const levelController = new LevelController();

router.get("/level", levelController.GetAll.bind(levelController));
router.get("/level/:id", levelController.GetById.bind(levelController));
router.post("/level", levelController.Create.bind(levelController));
router.put("/level/:id", levelController.Update.bind(levelController));
router.delete("/level/:id", levelController.Delete.bind(levelController));

module.exports = router;
