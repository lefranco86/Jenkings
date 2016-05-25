var assert = require("chai").assert;
var controller = require("../../src/controllers/indexController.js");
// {
//  get: function get() {...}
// }

describe("GET /index", function() {
  var req;
  var res;

  beforeEach(function() {
    req = {};
    res = {};
  });

  it("should be equal to Hello World", function(done) {
    res.send = function(data) {
      assert.equal(data, "Hello World");
      done();
    };
    controller.get(req, res);
  });

  it("shouldn't be equals to Hello", function(done) {
    res.send = function(data) {
      assert.notEqual("Chevreuil", data);
      done();
    };
    controller.get(req, res);
  });
});
