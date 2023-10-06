const ClassRepository = require("../repositories/ClassRepository");

class ClassService {
  constructor() {
    this.classRepository = new ClassRepository();
  }

  async GetAll(where) {
    return await this.classRepository.GetAll(where);
  }

  async GetById(id) {
    const result = await this.classRepository.GetById(id);

    if (!result) {
      throw new Error("Class not found");
    }

    return result;
  }

  async Create(start_date, teacher_id, level_id) {
    return await this.classRepository.Create(start_date, teacher_id, level_id);
  }

  async Update(id, start_date, teacher_id, level_id) {
    await this.GetById(id);

    await this.classRepository.Update(id, start_date, teacher_id, level_id);

    return await this.GetById(id);
  }

  async Delete(id) {
    await this.GetById(id);

    return await this.classRepository.Delete(id);
  }

  async Restore(id) {
    return await this.classRepository.Restore(id);
  }
}

module.exports = ClassService;
