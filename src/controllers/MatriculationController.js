const MatriculationService = require("../service/MatriculationService");

class MatriculationController {
  constructor() {
    this.matriculationService = new MatriculationService();
  }

  async GetOneMatriculation(req, res) {
    try {
      const { student_id, matriculation_id } = req.params;

      const result = await this.matriculationService.GetOneMatriculation(
        student_id,
        matriculation_id
      );
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async GetMatriculations(req, res) {
    try {
      const { student_id } = req.params;

      const result = await this.matriculationService.GetMatriculations(
        student_id
      );
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async Create(req, res) {
    try {
      const { student_id } = req.params;
      const { status, class_id } = req.body;

      const result = await this.matriculationService.Create(
        student_id,
        status,
        class_id
      );
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async Update(req, res) {
    try {
      const { student_id, matriculation_id } = req.params;
      const { status, class_id } = req.body;

      const result = await this.matriculationService.Update(
        matriculation_id,
        student_id,
        status,
        class_id
      );
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async Delete(req, res) {
    try {
      const { matriculation_id } = req.params;

      await this.matriculationService.Delete(matriculation_id);
      return res
        .status(200)
        .json({ success: `id ${id} was successfully deleted` });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async Restore(req, res) {
    try {
      const { matriculation_id } = req.params;

      await this.matriculationService.Restore(matriculation_id);
      return res
        .status(200)
        .json({ success: `id ${id} has been successfully restored` });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = MatriculationController;
