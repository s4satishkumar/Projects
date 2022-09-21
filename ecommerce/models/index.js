'use strict';
require ('dotenv').config();
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
console.log(config,"hi");
// const config = require(__dirname + '/../config/database.config.js')[env];
const db = {};

let sequelize;
/*  using the database password from .env */
config.password=process.env.DEVELOPMENT_DATABASE_PASSWORD;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username,config.password,  config);
}
console.log(config,"hi");
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  
  
  .forEach(file => {

    const modelTemp = require(path.join(__dirname, file));
if (typeof(modelTemp) != "function") return;
const model=modelTemp(sequelize, Sequelize.DataTypes);


db[model.name] = model;
    // const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    // db[model.name] = model;
  });

  console.log(config,"hi");
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
console.log(config,"hello");
module.exports = db;
