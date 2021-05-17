const { program } = require('commander');
const checkAction = require('./check-action')
const checkIsNumber = require('./check-shift');


module.exports = () => {

    program
    .requiredOption('-a, --action <action>', 'encode or decode', checkAction)
    .requiredOption('-s, --shift <shift>', 'a shift', checkIsNumber)
    .option('-i, --input <file>', 'an input file')
    .option('-o, --output <file>', 'an output file')
    
    program.parse(process.argv);
    const opts = program.opts();

    return opts;
}
