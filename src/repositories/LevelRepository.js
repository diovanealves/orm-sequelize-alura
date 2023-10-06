const { Level } = require("../database/models");

class LevelRepository {
  async GetAll() {
    return await Level.findAll();
  }

  async GetById(id) {
    return await Level.findByPk(id);
  }

  async Create(description_level) {
    return await Level.create({
      description_level,
    });
  }

  async Update(id, description_level) {
    return await Level.update(
      {
        description_level,
      },
      {
        where: { id },
      }
    );
  }

  async Delete(id) {
    return await Level.destroy({
      where: { id },
    });
  }

  async Restore(id) {
    return await Level.restore({ where: { id } });
  }
}

module.exports = LevelRepository;
