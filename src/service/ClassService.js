const ClassRepository = require("../repositories/ClassRepository");

class ClassService {
  constructor() {
    this.classRepository = new ClassRepository();
  }

  async getAll() {
    return await this.classRepository.getAll();
  }

  async getById(id) {
    return await this.classRepository.getById(id);
  }

  async create(start_date, teacher_id, level_id) {
    return await this.classRepository.create(start_date, teacher_id, level_id);
  }

  async update(id, start_date, teacher_id, level_id) {
    await this.getById(id);

    await this.classRepository.update(id, start_date, teacher_id, level_id);

    return await this.getById(id);
  }

  async delete(id) {
    await this.getById(id);

    return await this.classRepository.delete(id);
  }
}

module.exports = ClassService;
