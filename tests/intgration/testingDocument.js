var chai = require('chai'),
    assert = chai.assert,
    should = chai.should(),
    expect = chai.expect;

describe("Jenking", function () {

    describe("route ?", function () {

        describe("GET", function () {

            context("s'il le document", function () {

                context("existe", function () {
                    it("devrait afficher le document");
                });

                context("n'existe pas", function () {
                    it("devrait afficher un message d'erreur");
                });

            });

        });

        describe("PUT", function () {

            context("s'il le document", function () {

                context("existe", function () {

                    context("et que le formulaire", function () {

                        context("est valide", function () {
                            it("devrait modifier le document");
                        });

                        context("n'est pas valide", function () {
                            it("devrait afficher un message d'erreur");
                        });

                    });

                });

                context("n'existe pas", function () {
                    it("devrait afficher un message d'erreur");
                });

            });
        });

        describe("DELETE", function () {

            context("s'il le document", function () {

                context("existe", function () {
                    it("devrait suprimer le document de la bd");
                });

                context("n'existe pas", function () {
                    it("devrait afficher un message d'erreur");
                });

            });

        });

    });
    
    describe("route ?(moddoc)", function () {

        describe("GET", function () {
            it("devrait afficher la page de modification d'un document");
        });

    });

});