const UserRepository = require("../repositories/UserRepository");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async GetAll() {
    return await this.userRepository.GetAll();
  }

  async GetById(id) {
    const result = await this.userRepository.GetById(id);

    if (!result) {
      throw new Error("User Not Found");
    }

    return result;
  }

  async Create(name, active, email, role) {
    return await this.userRepository.Create(name, active, email, role);
  }

  async Update(id, name, active, email, role) {
    await this.GetById(id);

    await this.userRepository.Update(id, name, active, email, role);

    return await this.GetById(id);
  }

  async Delete(id) {
    await this.GetById(id);

    return await this.userRepository.Delete(id);
  }
}

module.exports = UserService;
