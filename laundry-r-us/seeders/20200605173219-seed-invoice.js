"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Invoices", [
      {
        invoice_number: "100001",
        total: "321.32",
        currency: "USD",
        invoice_date: new Date(),
        due_date: new Date(),
        vendor_name: "ACME inc",
        remittance_name: "unknown",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        invoice_number: "100002",
        total: "31.76",
        currency: "USD",
        invoice_date: new Date(),
        due_date: new Date(),
        vendor_name: "MEAC inc",
        remittance_name: "unknown",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        invoice_number: "100003",
        total: "666.66",
        currency: "USD",
        invoice_date: new Date(),
        due_date: new Date(),
        vendor_name: "Alphabet Boys",
        remittance_name: "unknown",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
