const { User } = require("../database/models");

class UserRepository {
  async GetAll() {
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
    await User.destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = UserRepository;
