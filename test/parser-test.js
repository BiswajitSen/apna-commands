const {describe, it} = require('node:test')
const {deepStrictEqual} = require('assert')

const {parse} = require('../src/parser.js');

describe('parse', function() {
  it('Should generate commands from a given source code.', function() {
    deepStrictEqual(parse('pwd\nls\ncd workspace'), 
      [
        {opCode: 'pwd', args: undefined},
        {opCode: 'ls', args: undefined},
        {opCode: 'cd', args: 'workspace'}
      ]
    );
  });
});
