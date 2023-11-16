const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Category = sequelize.define("category", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  parent_id: { type: DataTypes.INTEGER, defaultValue: null },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  icon: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },
  slug: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Articles = sequelize.define("articles", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  urlToImage: { type: DataTypes.STRING },
  url: { type: DataTypes.STRING },
  author: { type: DataTypes.STRING, allowNull: false },
  publishedAt: { type: DataTypes.DATE },
});

module.exports = {
  Category,
  Articles,
};
