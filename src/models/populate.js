/**
 * Created by jeremy on 16-05-17.
 */

var Sequelize = require('sequelize');

var sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "../jenking.db"
});

var author = require("./author")(sequelize);
var document = require("./document")(sequelize, author);

author.sync({force: true}).then(function () {
    author.bulkCreate([
        {
            firstName: "Erica",
            lastName: "Warner",
            nickname: "Sed.pharetra.felis@Morbivehicula.net"
        },
        {
            firstName: "Hiram",
            lastName: "Payne",
            nickname: "fermentum.vel.mauris@sem.ca"
        },
        {
            firstName: "Ria",
            lastName: "Mendez",
            nickname: "mattis@utnullaCras.co.uk"
        },
        {
            firstName: "Demetria",
            lastName: "Marquez",
            nickname: "Nunc.sollicitudin@nislQuisque.net"
        }
    ]).then(function () {
        document.sync({force: true}).then(function () {
            document.bulkCreate([
                {
                    author: 1,
                    title: "erat",
                    body: "vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos."
                },
                {
                    author: 1,
                    title: "dui",
                    body: "interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor,"
                },
                {
                    author: 4,
                    title: "Aliquam",
                    body: "diam. Pellentesque habitant morbi tristique"
                },
                {
                    author: 4,
                    title: "est,",
                    body: "natoque penatibus et magnis"
                },
                {
                    author: 3,
                    title: "Duis",
                    body: "dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum"
                }
            ]).then(function () {
                console.log("OKAY!");
            });
        });
    });
});