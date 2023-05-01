const {describe, it} = require('node:test')
const {deepStrictEqual} = require('assert')

const {ls, pwd, cd} = require('../src/commands.js');

describe('commands', function() {
  it('Should update the environment outputRegister with pwd.', function() {
    deepStrictEqual(pwd({PWD: process.env.PWD, outputRegister: []}), 

      {
        PWD: '/Users/biswajitsen/workspace/js/codes/apna-command',
        outputRegister: [
          {
            command: 'pwd',
            args: [],
            output: '/Users/biswajitsen/workspace/js/codes/apna-command'
          }
        ]
      });
  });

  it('Should give the list of files of the pwd.', function() {
    deepStrictEqual(cd({PWD: process.env.PWD, outputRegister: [], errorRegister:[]}, {args:'workspace'}),
      {
        PWD: '/Users/biswajitsen/workspace/js/codes/apna-command/workspace',
        outputRegister: [
          {
            command: 'cd',
            args: ['workspace'],
            output: '/Users/biswajitsen/workspace/js/codes/apna-command/workspace'
          }
        ],
        errorRegister: [],
        oldPWD: '/Users/biswajitsen/workspace/js/codes/apna-command'
      });
  });

  it('Should give list of files in the current dir.', function() {
    deepStrictEqual(ls({PWD: process.env.PWD, outputRegister: []}),
      {
        PWD: '/Users/biswajitsen/workspace/js/codes/apna-command',
        outputRegister: [{ 
          command: 'ls',
          args: [],
          output: [
            '.git',
            'apna-script.ab',
            'src',
            'test',
            'workspace'
          ]} 
        ]
      });
  });

});
