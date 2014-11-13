var Determinist = require('../').Determinist;

describe("Sanity checks", function() {
  var fsm;

  before(function() {
    fsm = {};
    fsm = new Determinist();
  });

  it("Have EventEmitter bevaviour attached", function(done) {
    fsm.once('foo', function() { done() }).emit('foo');
  });
});
