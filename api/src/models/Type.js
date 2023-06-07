const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'Type',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
