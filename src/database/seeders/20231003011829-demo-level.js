module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      "Levels",
      [
        {
          description_level: "básico",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description_level: "intermediário",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description_level: "avançado",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("Levels", null, {});
  },
};
