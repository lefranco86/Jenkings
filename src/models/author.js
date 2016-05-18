/**
 * Created by jeremy on 16-05-17.
 */

var Sequelize = require('sequelize');

module.exports = function (sequelize, modele) {
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
            freezeTableName: true
        }
    );

};
