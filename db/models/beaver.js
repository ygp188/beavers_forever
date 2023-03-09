const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Beaver extends Model {
    static associate() {}
  }

  Beaver.init(
    {
      name: DataTypes.TEXT,
      img: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Beaver',
    },
  );

  return Beaver;
};
