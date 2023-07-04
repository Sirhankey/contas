const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database/conn')
const GrupoModelDB = require('../models/GrupoModelDB')

const ContaModelDB = db.define('ContaModelDB', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // unique: true,
    // validate: {
    //   isEmail: true,
    // },
  },
  grupo_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'GrupoModelDB',
      key: 'id',
    },
  },
  vencimento: {
    type: DataTypes.CHAR(10),
    allowNull: false,
  },
  valor_fixo: {
    type: DataTypes.TINYINT(1),
    allowNull: false,
  },
  mensal: {
    type: DataTypes.TINYINT(1),
    allowNull: false,
  },
  pago: {
    type: DataTypes.TINYINT(1),
    allowNull: false,
  },
  dta_pagamento: {
    type: DataTypes.CHAR(10),
    allowNull: true,
  },
  forma_pagamento: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  desconto: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  obs: {
    type: DataTypes.STRING,
    allowNull: true,
  },
})

ContaModelDB.belongsTo(GrupoModelDB, { foreignKey: 'grupo_id' })

module.exports = ContaModelDB