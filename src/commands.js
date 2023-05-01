const fs = require('fs');

const constructOutput = function(command, output, ...args) {
  return {
    'command': command,
    args,
    output
  };
};

const constructError = function(command, error, ...args) {
  return {
    'command': command,
    args,
    error
  };
};

const pwd = function(environment) {
  const {PWD} = environment;

  const output = constructOutput('pwd', PWD);
  environment['outputRegister'].push(output);

  return environment;
};

const ls = function(environment) {
  const {PWD} = environment;
  const files = fs.readdirSync(PWD);

  const output = constructOutput('ls', files);
  environment['outputRegister'].push(output);

  return environment;
};

const cd = function(environment, path) {
  const {PWD} = environment;
  const {args} = path;
  const potentialPWD = `${PWD}/${args}`;

  if(fs.existsSync(potentialPWD)) {
    environment['oldPWD'] = PWD;
    environment['PWD'] = potentialPWD;

    const output = constructOutput('cd', potentialPWD, args);
    environment['outputRegister'].push(output);

    return environment;
  }

  const errorMessage = `cd: no such file or directory: ${args}`;
  const error = constructError('cd', errorMessage, args);
  environment['errorRegister'].push(error);

  return environment;
};

exports.pwd = pwd;
exports.ls = ls;
exports.cd = cd;
