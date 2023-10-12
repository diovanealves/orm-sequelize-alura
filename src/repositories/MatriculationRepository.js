const { Matriculation } = require("../database/models");
const Sequelize = require("sequelize")

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

  async GetMatriculations(pessoa) {
    return await pessoa.getClassesEnrollment();
  }

  async GetMatriculationsByClass(class_id){
    return await Matriculation.findAndCountAll({
      where: {
        class_id,
        status: "confirmado"
      },
      limit: 20,
      order: [["student_id", "ASC"]]
    })
  }

  async GetFullClass(limitedClass){
    return await Matriculation.findAndCountAll({
      where: {
        status: "confirmado"
      },
      attributes: ["class_id"],
      group: ['class_id'],
      having: Sequelize.literal(`count(class_id) >= ${limitedClass}`)
    })
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
