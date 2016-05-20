/**
 * Created by jeremy on 16-05-17.
 */

/**
 * Ceci contiendra toutels les modèles de sequelize
 * @typedef {{author : sequelize.Model, document: sequelize.Model}} modelObjects
 */

var Sequelize = require('sequelize');

/**
 * Fonction utilisé pour initialiser les modèles
 * @param {sequelize} sequelize l'objet sequelize à utiliser
 * @param {modelObjects} modele la collection de modèles à utiliser
 */
module.exports = function(sequelize, modele) {
  modele.author = sequelize.define('JNK_AUTHOR_AUT',
    {
      id: {
        type: Sequelize.INTEGER,
        field: "AUT_ID",
        autoIncrement: true,
        primaryKey: true
      },
      firstName: {
        type: Sequelize.STRING,
        field: "AUT_FIRSTNAME"
      },
      lastName: {
        type: Sequelize.STRING,
        field: "AUT_LASTNAME"
      },
      nickname: {
        type: Sequelize.STRING,
        field: "AUT_NICKNAME"
      }

    }, {
      freezeTableName: true,
      name: {
        singular: 'author',
        plural: 'authors'
      }
    }
  );
};

