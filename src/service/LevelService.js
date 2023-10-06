const LevelRepository = require("../repositories/LevelRepository");

class LevelService {
  constructor() {
    this.levelRepository = new LevelRepository();
  }

  async GetAll() {
    return await this.levelRepository.GetAll();
  }

  async GetById(id) {
    const result = await this.levelRepository.GetById(id);

    if (!result) {
      throw new Error("Level not found");
    }

    return result;
  }

  async Create(description_level) {
    return await this.levelRepository.Create(description_level);
  }

  async Update(id, description_level) {
    await this.GetById(id);

    await this.levelRepository.Update(id, description_level);

    return this.GetById(id);
  }

  async Delete(id) {
    await this.GetById(id);

    return await this.levelRepository.Delete(id);
  }

  async Restore(id) {
    return await this.levelRepository.Restore(id);
  }
}

module.exports = LevelService;
