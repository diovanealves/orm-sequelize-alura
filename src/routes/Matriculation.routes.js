const { Router } = require("express");
const MatriculationController = require("../controllers/MatriculationController");

const router = Router();
const matriculationController = new MatriculationController();

router.get(
  "/user/:student_id/matriculation/:matriculation_id",
  matriculationController.getByStudent.bind(matriculationController)
);
router.post(
  "/user/:student_id/matriculation",
  matriculationController.create.bind(matriculationController)
);
router.put(
  "/user/:student_id/matriculation/:matriculation_id",
  matriculationController.update.bind(matriculationController)
);
router.delete(
  "/matriculation/:matriculation_id",
  matriculationController.delete.bind(matriculationController)
);

module.exports = router;
