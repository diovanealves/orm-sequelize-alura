const { Matriculation } = require("../database/models");

class MatriculationRepository {
  async GetById(id) {
    return await Matriculation.findByPk(id);
  }

  async GetOneMatriculation(student_id, matriculation_id) {
    return await Matriculation.findOne({
      where: {
        id: matriculation_id,
        student_id,
      },
    });
  }

  async Create(student_id, status, class_id) {
    return await Matriculation.create({
      student_id,
      status,
      class_id,
    });
  }

  async Update(matriculation_id, student_id, status, class_id) {
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

  async Delete(matriculation_id) {
    return await Matriculation.destroy({
      where: {
        id: matriculation_id,
      },
    });
  }

  async Restore(matriculation_id) {
    return await Matriculation.restore({ where: { id: matriculation_id } });
  }
}

module.exports = MatriculationRepository;
