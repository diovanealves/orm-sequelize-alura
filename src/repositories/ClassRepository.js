const { Class } = require("../database/models");

class ClassRepository {
  async GetAll(where) {
    return await Class.findAll({where: where});
  }

  async GetById(id) {
    return await Class.findByPk(id);
  }

  async Create(start_date, teacher_id, level_id) {
    return await Class.create({ start_date, teacher_id, level_id });
  }

  async Update(id, start_date, teacher_id, level_id) {
    return await Class.update(
      { start_date, teacher_id, level_id },
      { where: { id } }
    );
  }

  async Delete(id) {
    return await Class.destroy({ where: { id } });
  }

  async Restore(id) {
    return await Class.restore({ where: { id } });
  }
}
module.exports = ClassRepository;
