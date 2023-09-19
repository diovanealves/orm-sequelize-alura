const { User } = require("../database/models");

class UserRepository {
  async GetAll() {
    return await User.findAll();
  }

  async GetById(id) {
    return await User.findOne({
      where: {
        id,
      },
    });
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
    await User.update(
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

    return this.GetById(id);
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
