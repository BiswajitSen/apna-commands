const {parse} = require('./parser.js');
const pwd = function({environment}) {
  return environment;
};

const createEnvironment = function() {
  const environment = {
    pwd: process.env.PWD,
    oldPWD: process.env.olDPWD,
    outputStream: [],
    errorStream: []
  };

  return environment;
};

const main = function() {
  const sourceCode = process.argv[2];
  const commands = parse(sourceCode);
  let environment = createEnvironment();

};

exports.main = main;
