const { Sequelize, DataTypes } = require('sequelize');

const db = require('../database/conn')

const GrupoModelDB = db.define('GrupoModelDB', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  })
  
  module.exports = GrupoModelDB