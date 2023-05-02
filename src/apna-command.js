const fs = require('fs');

const {parse} = require('./parser.js');
const {execute} = require('./codeRunner.js');

const createEnvironment = function() {
  const environment = {
    PWD: process.env.PWD,
    oldPWD: process.env.olDPWD,
    outputRegister: [],
    errorRegister: []
  };

  return environment;
};

const main = function() {
  const file = process.argv[2];
  const sourceCode = fs.readFileSync(`./${file}`, 'utf-8');
  const commands = parse(sourceCode);
  let environment = createEnvironment();

  execute(commands, environment);
};

main();

exports.main = main;
