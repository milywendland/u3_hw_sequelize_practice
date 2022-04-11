'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Mobs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mobs.init(
    {
      name: DataTypes.STRING,
      color: DataTypes.STRING,
      nature: DataTypes.STRING,
      height: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Mobs',
      tabkeName: 'mobs'
    }
  )
  return Mobs
}
