(function(exports) {
  var EventEmitter = require('events').EventEmitter,
      Determinist = exports.Determinist = function() {},
      util = require('util')

  util.inherits(Determinist, EventEmitter)
}((typeof exports === 'undefined') ? window : exports))
