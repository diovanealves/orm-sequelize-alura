const MatriculationRepository = require("../repositories/MatriculationRepository");
const UserService = require("./UserService");

class MatriculationService {
  constructor() {
    this.matriculationRepository = new MatriculationRepository();
    this.userService = new UserService();
  }

  async GetById(id) {
    const result = await this.matriculationRepository.GetById(id);

    if (!result) {
      throw new Error("Matriculation not found");
    }

    return result;
  }

  async GetOneMatriculation(student_id, matriculation_id) {
    await this.userService.GetById(student_id);

    const result = await this.matriculationRepository.GetOneMatriculation(
      student_id,
      matriculation_id
    );

    if (!result) {
      throw new Error("Matriculation not found");
    }

    return result;
  }

  async GetMatriculations(student_id) {
    const pessoa = await this.userService.GetById(student_id);

    return await this.matriculationRepository.GetMatriculations(pessoa);
  }

  async Create(student_id, status, class_id) {
    await this.userService.GetById(student_id);

    return await this.matriculationRepository.Create(
      student_id,
      status,
      class_id
    );
  }

  async Update(matriculation_id, student_id, status, class_id) {
    await this.getByStudent(student_id, matriculation_id);

    await this.matriculationRepository.Update(
      matriculation_id,
      student_id,
      status,
      class_id
    );

    return await this.GetByStudent(student_id, matriculation_id);
  }

  async Delete(matriculation_id) {
    await this.GetById(matriculation_id);

    return await this.matriculationRepository.Delete(matriculation_id);
  }

  async Restore(matriculation_id) {
    return await this.matriculationRepository.Restore(matriculation_id);
  }
}

module.exports = MatriculationService;
