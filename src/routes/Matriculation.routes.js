const { Router } = require("express");
const MatriculationController = require("../controllers/MatriculationController");

const router = Router();
const matriculationController = new MatriculationController();

router.get(
  "/user/:student_id/matriculation/:matriculation_id",
  matriculationController.GetOneMatriculation.bind(matriculationController)
);
router.post(
  "/user/:student_id/matriculation",
  matriculationController.Create.bind(matriculationController)
);
router.post(
  "/matriculation/:id/restore",
  matriculationController.Restore.bind(matriculationController)
);

router.put(
  "/user/:student_id/matriculation/:matriculation_id",
  matriculationController.Update.bind(matriculationController)
);
router.delete(
  "/matriculation/:matriculation_id",
  matriculationController.Delete.bind(matriculationController)
);

module.exports = router;
