const UserRepository = require("../repositories/UserRepository");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async GetAll() {
    return await this.userRepository.GetAll();
  }

  async GetById(id) {
    return await this.userRepository.GetById(id);
  }

  async Create(name, active, email, role) {
    return await this.userRepository.Create(name, active, email, role);
  }

  async Update(id, name, active, email, role) {
    return await this.userRepository.Update(id, name, active, email, role);
  }

  async Delete(id) {
    return await this.userRepository.Delete(id);
  }
}

module.exports = UserService;
