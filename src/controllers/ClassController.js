const ClassService = require("../service/ClassService");
const { Op } = require("sequelize");

class ClassController {
  constructor() {
    this.classService = new ClassService();
  }

  async GetAll(req, res) {
    const { starting_date, end_date } = req.query;
    const where = {};
    starting_date || end_date ?  where.start_date = {} : null
    starting_date ? where.start_date[Op.gte] = starting_date : null
    end_date ? where.start_date[Op.lte] = end_date : null

    try {
      const result = await this.classService.GetAll(where);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async GetById(req, res) {
    try {
      const { id } = req.params;
      const result = await this.classService.GetById(id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async Create(req, res) {
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

  async Update(req, res) {
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

  async Delete(req, res) {
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
