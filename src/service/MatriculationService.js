const MatriculationRepository = require("../repositories/MatriculationRepository");
const UserService = require("./UserService");

class MatriculationService {
  constructor() {
    this.matriculationRepository = new MatriculationRepository();
    this.userService = new UserService();
  }

  async getById(id) {
    const result = await this.matriculationRepository.getById(id);

    if (!result) {
      throw new Error("Matriculation not found");
    }

    return result;
  }

  async getByStudent(student_id, matriculation_id) {
    await this.userService.GetById(student_id);

    const result = await this.matriculationRepository.getByStudent(
      student_id,
      matriculation_id
    );

    if (!result) {
      throw new Error("Matriculation not found");
    }

    return result;
  }

  async create(student_id, status, class_id) {
    await this.userService.GetById(student_id);

    return await this.matriculationRepository.create(
      student_id,
      status,
      class_id
    );
  }

  async update(matriculation_id, student_id, status, class_id) {
    await this.getByStudent(student_id, matriculation_id);

    await this.matriculationRepository.update(
      matriculation_id,
      student_id,
      status,
      class_id
    );

    return await this.getByStudent(student_id, matriculation_id);
  }

  async delete(matriculation_id) {
    await this.getById(matriculation_id);

    return await this.matriculationRepository.delete(matriculation_id);
  }
}

module.exports = MatriculationService;
