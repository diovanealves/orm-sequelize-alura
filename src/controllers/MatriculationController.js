const MatriculationService = require("../service/MatriculationService");

class MatriculationController {
  constructor() {
    this.matriculationService = new MatriculationService();
  }

  async getByStudent(req, res) {
    try {
      const { student_id, matriculation_id } = req.params;

      const result = await this.matriculationService.getByStudent(
        student_id,
        matriculation_id
      );
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const { student_id } = req.params;
      const { status, class_id } = req.body;

      const result = await this.matriculationService.create(
        student_id,
        status,
        class_id
      );
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { student_id, matriculation_id } = req.params;
      const { status, class_id } = req.body;

      const result = await this.matriculationService.update(
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

  async delete(req, res) {
    try {
      const { matriculation_id } = req.params;

      await this.matriculationService.delete(matriculation_id);
      return res.status(204).json();
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = MatriculationController;
