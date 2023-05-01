const {pwd, ls, cd} = require('./commands.js');
const opCodes = {pwd, ls, cd};

const execute = function(instructions, environment) {
  return instructions.reduce(function(environment, instruction){
    const {opCode, ...args} = instruction;
    const currentInstruction = opCodes[opCode];

    return currentInstruction(environment, args);
  }, environment);
};

exports.execute = execute;
