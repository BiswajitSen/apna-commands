const parse = function(sourceCode) {
  const commands = sourceCode.trim().split('\n');

  return commands.reduce(function(commandLines, command){
    const [opCode, args] = command.split(' ');
    commandLines.push({opCode, args});

    return commandLines;
  }, [])

};

exports.parse = parse;
