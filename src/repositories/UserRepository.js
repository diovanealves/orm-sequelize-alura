const { User } = require("../database/models");

class UserRepository {
  async GetAll() {
    return await User.scope("all").findAll();
  }

  async GetAllActive() {
    return await User.findAll();
  }

  async GetById(id) {
    return await User.findByPk(id);
  }

  async Create(name, active, email, role) {
    return await User.create({
      name,
      active,
      email,
      role,
    });
  }

  async Update(id, name, active, email, role) {
    return await User.update(
      {
        name,
        active,
        email,
        role,
      },
      {
        where: {
          id: id,
        },
      }
    );
  }

  async Delete(id) {
    return await User.destroy({
      where: {
        id: id,
      },
    });
  }

  async Restore(id) {
    return await User.restore({ where: { id } });
  }
}

module.exports = UserRepository;
