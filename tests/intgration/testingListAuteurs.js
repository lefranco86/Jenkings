var chai = require('chai'),
    assert = chai.assert,
    should = chai.should(),
    expect = chai.expect;

describe("Jenking", function () {

    describe("route ?", function () {

        describe("GET", function () {

            context("s'il existe des Auteurs", function () {
                it("devrait retourner touts les Auteurs dans la BD");
            });

            context("s'il n'existe pas d'Auteurs", function () {
                it("devrait afficher un empty state");
            });

        });

        describe("PUT", function () {

            context("si les données sont valides", function () {
                it("devrait rajouter un Auteur dans la bd");
            });

            context("si les donées ne sont pas valides", function () {

                context("car le nom est null ou indéfinit", function () {
                    it("devrait pas rajouter un document dans la bd");
                });

                context("car le prénom est null ou indéfinit", function () {
                    it("devrait pas rajouter un document dans la bd");
                });

                context("car le nom d'utilisateur est null ou indéfinit", function () {
                    it("devrait pas rajouter un document dans la bd");
                });

            });

        });

    });

    describe("route ?(newauthor)", function () {

        describe("GET", function () {
            it("devrait afficher la page d'ajout d'un Auteur");
        });

    });
    
});