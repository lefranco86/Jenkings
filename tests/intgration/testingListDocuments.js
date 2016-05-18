var chai = require('chai'),
    assert = chai.assert,
    should = chai.should(),
    expect = chai.expect;

describe("Jenking", function () {
    describe("route ?", function () {

        describe("GET", function () {

            context("s'il existe des documents", function () {
                it("devrait retourner toutes les document dans la BD");
            });

            context("s'il n'existe pas de documents", function () {
                it("devrait afficher un empty state");
            });

        });

        describe("PUT", function () {

            context("si les données sont valides", function () {
                it("devrait rajouter un document dans la bd");
            });

            context("si les donées ne sont pas valides", function () {

                context("car l'auteur", function () {

                    context("n'existe pas", function () {
                        it("devrait pas rajouter un document dans la bd");
                    });

                    context("est null ou indéfinit", function () {
                        it("devrait pas rajouter un document dans la bd");
                    });

                });

                context("car le type n'existe pas", function () {
                    it("devrait pas rajouter un document dans la bd");
                });

                context("car le corps est null ou indéfinit", function () {
                    it("devrait pas rajouter un document dans la bd");
                });

            });
        });
    });
});