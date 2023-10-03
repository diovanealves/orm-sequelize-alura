const { Class } = require("../database/models");

class ClassRepository {
  async getAll() {
    return await Class.findAll();
  }

  async getById(id) {
    const result = await Class.findByPk(id);

    if (!result) {
      throw new Error("Class not found");
    }

    return result;
  }

  async create(start_date, teacher_id, level_id) {
    return await Class.create({ start_date, teacher_id, level_id });
  }

  async update(id, start_date, teacher_id, level_id) {
    return await Class.update(
      { start_date, teacher_id, level_id },
      { where: { id } }
    );
  }

  async delete(id) {
    return await Class.destroy({ where: { id } });
  }
}
module.exports = ClassRepository;
