const ClassService = require("../service/ClassService");

class ClassController {
  constructor() {
    this.classService = new ClassService();
  }

  async getAll(req, res) {
    try {
      const result = await this.classService.GetAll();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const result = await this.classService.GetById(id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const { start_date, teacher_id, level_id } = req.body;
      const result = await this.classService.Create(
        start_date,
        teacher_id,
        level_id
      );
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { start_date, teacher_id, level_id } = req.body;

      const result = await this.classService.Update(
        id,
        start_date,
        teacher_id,
        level_id
      );
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      await this.classService.Delete(id);
      return res
        .status(200)
        .json({ success: `id ${id} was successfully deleted` });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async Restore(req, res) {
    try {
      const { id } = req.params;

      await this.classService.Restore(id);
      return res
        .status(200)
        .json({ success: `id ${id} has been successfully restored` });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = ClassController;
