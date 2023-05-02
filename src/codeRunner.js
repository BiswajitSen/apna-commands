const {pwd, ls, cd} = require('./commands.js');

const commandToExecute = function(opCode) {
  const opCodes = {pwd, ls, cd};
  return opCodes[opCode];
}

const execute = function(instructions, environment) {
  return instructions.reduce(function(environment, instruction){
    const {opCode, ...args} = instruction;
    const currentInstruction = commandToExecute(opCode);

    return currentInstruction(environment, args);
  }, environment);
};

exports.execute = execute;
