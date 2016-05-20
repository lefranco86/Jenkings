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
 * @param {boolean} isPopulate si on utilise le script de population
 */
module.exports = function(sequelize, modele, isPopulate) {
  if (isPopulate) {
    modele.document = sequelize.define('JNK_DOCUMENT_DOC',
      {
        id: {
          type: Sequelize.INTEGER,
          field: "DOC_ID",
          autoIncrement: true,
          primaryKey: true
        },
        type: {
          type: Sequelize.INTEGER,
          field: "DOC_TYPE"
        },
        body: {
          type: Sequelize.TEXT,
          field: "DOC_BODY"
        },
        title: {
          type: Sequelize.STRING,
          field: "DOC_TITLE"
        },
        author: {
          type: Sequelize.INTEGER,
          field: "DOC_AUTHOR",
          references: {
            model: modele.author,
            key: 'AUT_ID'
          }
        }
      }, {
        freezeTableName: true,
        name: {
          singular: 'document',
          plural: 'documents'
        }
      }
    );
  } else {
    modele.document = sequelize.define('JNK_DOCUMENT_DOC',
      {
        id: {
          type: Sequelize.INTEGER,
          field: "DOC_ID",
          autoIncrement: true,
          primaryKey: true
        },
        type: {
          type: Sequelize.INTEGER,
          field: "DOC_TYPE"
        },
        body: {
          type: Sequelize.TEXT,
          field: "DOC_BODY"
        },
        title: {
          type: Sequelize.STRING,
          field: "DOC_TITLE"
        }
      }, {
        freezeTableName: true,
        name: {
          singular: 'document',
          plural: 'documents'
        }
      }
    );
    modele.document.belongsTo(modele.author, {foreignKey: "DOC_AUTHOR"});
  }
};

