module.exports = function(sequelize, DataTypes) {
  var composition = sequelize.define('composition', {
    fk_composition_composer: DataTypes.INTEGER,
    composition_period: DataTypes.STRING,
    composition_date: DataTypes.DATE,
    composition_setting: DataTypes.STRING,
    composition_genre: DataTypes.STRING,
    composition_total_movements: DataTypes.INTEGER
  });
  return composition;
};