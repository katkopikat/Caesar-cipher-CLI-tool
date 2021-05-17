const argsparse = require('./argsparse');
const transformer = require('./transform');
const { pipeline } = require('stream');
const fs = require('fs');

const opts= argsparse();

pipeline(
    opts.input
        ? fs.createReadStream(opts.input, {encoding: 'utf8'})
        : process.stdin,
    transformer(opts.action, opts.shift),
    opts.output
        ? fs.createWriteStream(opts.output, {
            flags: fs.constants.O_WRONLY|fs.constants.O_APPEND,
            encoding: 'utf8' }
            )
        : process.stdout,
        (err) => {
            if (err) {
                err.code == 'ENOENT'
                    ? process.stderr.write(`File does not exist: ${err.path}`)
                    : process.stderr.write(err.toString());
                process.exit(1);
            } else {
                console.log('Caesar`s work is complete.');
              }
        }
)