module.exports = (str, action, shift) => {
    const alphabetS = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetL = alphabetS.toUpperCase();
    const MAX_SHIFT = 26;

    let step = shift % MAX_SHIFT;
    if (shift < 0) step += MAX_SHIFT;
    if (action == 'decode') step = MAX_SHIFT - step;

    return [...str]
                .map(char => {
                    if (char.match(/[a-z]/)) {
                      return alphabetS[(alphabetS.indexOf(char) + step) % MAX_SHIFT];
                    } else if (char.match(/[A-Z]/)) {
                        return alphabetL[(alphabetL.indexOf(char) + step) % MAX_SHIFT];
                    } else {
                        return char;
                    }
                 })
                 .join('');
}