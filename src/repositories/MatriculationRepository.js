const { Matriculation } = require("../database/models");

class MatriculationRepository {
  async getById(id) {
    return await Matriculation.findByPk(id);
  }

  async getByStudent(student_id, matriculation_id) {
    return await Matriculation.findOne({
      where: {
        id: matriculation_id,
        student_id,
      },
    });
  }

  async create(student_id, status, class_id) {
    return await Matriculation.create({
      student_id,
      status,
      class_id,
    });
  }

  async update(matriculation_id, student_id, status, class_id) {
    return await Matriculation.update(
      {
        status,
        class_id,
      },
      {
        where: {
          id: matriculation_id,
          student_id,
        },
      }
    );
  }

  async delete(matriculation_id) {
    return await Matriculation.destroy({
      where: {
        id: matriculation_id,
      },
    });
  }
}

module.exports = MatriculationRepository;
