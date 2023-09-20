const LevelService = require("../service/LevelService");

class LevelController {
  constructor() {
    this.levelService = new LevelService();
  }

  async GetAll(req, res) {
    try {
      const result = await this.levelService.GetAll();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async GetById(req, res) {
    try {
      const { id } = req.params;

      const result = await this.levelService.GetById(id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async Create(req, res) {
    try {
      const { description_level } = req.body;

      const result = await this.levelService.Create(description_level);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async Update(req, res) {
    try {
      const { id } = req.params;
      const { description_level } = req.body;

      const result = await this.levelService.Update(id, description_level);
      return res.status(200).json(result).json();
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async Delete(req, res) {
    try {
      const { id } = req.params;

      await this.levelService.Delete(id);
      return res.status(204).json();
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = LevelController;
