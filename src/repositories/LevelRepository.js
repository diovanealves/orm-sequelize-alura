const { Level } = require("../database/models");

class LevelRepository {
  async GetAll() {
    return await Level.findAll();
  }

  async GetById(id) {
    return await Level.findOne({
      where: {
        id,
      },
    });
  }

  async Create(description_level) {
    return await Level.create({
      description_level,
    });
  }

  async Update(id, description_level) {
    await Level.update(
      {
        description_level,
      },
      {
        where: { id },
      }
    );

    return await this.GetById(id);
  }

  async Delete(id) {
    await Level.destroy({
      where: { id },
    });
  }
}

module.exports = LevelRepository;
