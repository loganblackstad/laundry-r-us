"use strict";
module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define(
    "Invoice",
    {
      invoice_number: DataTypes.INTEGER,
      total: DataTypes.DECIMAL(10, 2),
      currency: DataTypes.STRING,
      invoice_date: DataTypes.DATE,
      due_date: DataTypes.DATE,
      vendor_name: DataTypes.STRING,
      remittance_name: DataTypes.STRING,
    },
    {}
  );
  Invoice.associate = function (models) {
    // associations can be defined here
  };
  return Invoice;
};
