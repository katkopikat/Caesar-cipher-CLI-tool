const commander = require('commander');

module.exports = (value) => {
    const parsedValue = parseInt(value, 10);
    if (isNaN(parsedValue)) {
      throw new commander.InvalidOptionArgumentError('Shift is not a number!');
    }
    return parsedValue;
  }
  