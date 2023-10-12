const UserService = require("../service/UserService");

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  async GetAll(req, res) {
    try {
      const result = await this.userService.GetAll();

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async GetAllActive(req, res) {
    try {
      const result = await this.userService.GetAllActive();

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async GetById(req, res) {
    try {
      const { id } = req.params;

      const result = await this.userService.GetById(id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async Create(req, res) {
    try {
      const { name, active, email, role } = req.body;

      const result = await this.userService.Create(name, active, email, role);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async Update(req, res) {
    try {
      const { id } = req.params;
      const { name, active, email, role } = req.body;

      const result = await this.userService.Update(
        id,
        name,
        active,
        email,
        role
      );

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async Delete(req, res) {
    try {
      const { id } = req.params;

      await this.userService.Delete(id);
      return res
        .status(200)
        .json({ success: `id ${id} was successfully deleted` });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async Restore(req, res) {
    try {
      const { id } = req.params;

      await this.userService.Restore(id);
      return res
        .status(200)
        .json({ success: `id ${id} has been successfully restored` });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async CancelUser(req,res){
    try {
      const { id } = req.params;

      const result = await this.userService.CancelUser(id)
      return res.status(200).json({success: `Matrículas referente ao estudante ${id} foi cancelado`}) 
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = UserController;
