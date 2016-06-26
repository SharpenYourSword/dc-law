'use strict';

const tap = require('tap');
const dclaw = require('../index.js');

tap.test('test getDCCode', function (t){

  t.same(dclaw.getDCCode(), {'error': 'title and section must both be defined'}, 'make sure that the error is properly defined');
  t.same(dclaw.getDCCode(2, 531), {'url': 'https://beta.code.dccouncil.us/dc/council/code/sections/2-531.html'}, 'get basic HTML url');
  t.end();

});
