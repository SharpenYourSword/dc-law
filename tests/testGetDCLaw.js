const tap = require('tap');
const dclaw = require('../index.js');

tap.test('test getDCLaw', function (t){

  t.same(dclaw.getDCLaw(), {'error': 'councilPeriod and lawNo must both be defined'}, 'make sure that the error is properly defined');
  t.same(dclaw.getDCLaw(1, 1), {'url': 'https://beta.code.dccouncil.us/dc/council/laws/1-1.html'}, 'get basic HTML url');
  t.same(dclaw.getDCLaw(3, 13, true), {'url': 'https://beta.code.dccouncil.us/dc/council/laws/docs/3-13.pdf'}, 'get pdf url');
  t.end();

});
