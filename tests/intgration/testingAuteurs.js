/* eslint-env node, mocha */

// var assert = require('chai').assert;

describe("Jenking", function() {
  describe("route ?", function() {
    describe("GET", function() {
      context("s'il l'auteur", function() {
        context("existe", function() {
          it("devrait afficher les informations de l'auteur");
        });

        context("n'existe pas", function() {
          it("devrait afficher un message d'erreur");
        });
      });
    });

    describe("PUT", function() {
      context("s'il l'auteur", function() {
        context("existe", function() {
          context("et que le formulaire", function() {
            context("est valide", function() {
              it("devrait modifier les informations relatif à l'auteur");
            });

            context("n'est pas valide", function() {
              it("devrait afficher un message d'erreur");
            });
          });
        });

        context("n'existe pas", function() {
          it("devrait afficher un message d'erreur");
        });
      });
    });

    describe("DELETE", function() {
      context("s'il l'auteur", function() {
        context("existe", function() {
          it("devrait suprimer l'auteur de la bd");
        });

        context("n'existe pas", function() {
          it("devrait afficher un message d'erreur");
        });
      });
    });
  });

  describe("route ?(modauthor)", function() {
    describe("GET", function() {
      it("devrait afficher la page de modification d'un Auteur");
    });
  });
});
