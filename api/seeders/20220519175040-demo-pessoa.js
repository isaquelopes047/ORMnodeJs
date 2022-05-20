'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Pessoas', [
    {
      nome: 'Isaque Lopes',
      ativo: true,
      email: 'isaque.lopes0@gmail.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Pessoas', null, {})
  }
};
