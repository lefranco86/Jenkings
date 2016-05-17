/**
 * Created by jeremy on 16-05-17.
 */

var Sequelize = require('sequelize');

module.exports = function (sequelize, author) {

    return sequelize.define('JNK_DOCUMENT_DOC',
        {
            id: {
                type: Sequelize.INTEGER,
                field: "DOC_ID",
                autoIncrement: true,
                primaryKey: true
            },
            author: {
                type: Sequelize.INTEGER,
                field: "DOC_AUTHOR",
                references: {
                    model: author,
                    key: 'AUT_ID'
                }
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
            freezeTableName: true
        }
    );
}

