const commander = require('commander');

module.exports = (action) => {
    if (action != 'encode' && action != 'decode') {
      throw new commander.InvalidOptionArgumentError('Option <action> must be "encode" or "decode');
    }
    return action;
}
  