module.exports = (str, action, shift) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const inputStr = str.toLowerCase();
    const maxshift = alphabet.length;

    let step = shift % maxshift;
    if (shift < 0) step += maxshift;
    if (action == 'decode') step = -shift;

    return [...inputStr]
                .map(char => {
                    const ind = alphabet.indexOf(char);
                    return alphabet[(ind + step) % maxshift];
                 })
                 .join('')
}
